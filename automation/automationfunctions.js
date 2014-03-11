// Copyright (c) 2012 Jonathan Penn (http://cocoamanifest.net/)

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


// Pull in the special function, captureLocalizedScreenshot(), that names files
// according to device, language, and orientation
#import "capture.js"

// Now, we simply drive the application! For more information, check out my
// resources on UI Automation at http://cocoamanifest.net/features
var target = UIATarget.localTarget();
var window = target.frontMostApp().mainWindow();


var location = {"latitude":48.15188029999999, "longitude":11.561217499999998};
var locationIsset = target.setLocation(location);


function gotoRearViewControllerHauptansichtAndTakeScreenshoot(makeScreenshot){
	// App Starts in bpViewController and goes to RearViewController_Hauptansicht
	
	target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();
	
	if(makeScreenshot == true){
		target.delay(1);
		captureLocalizedScreenshot("RearViewController_Hauptansicht");
	}
}

function goTobpViewControllerAndTakeScreenshoot(makeScreenshoot){
	//go to bpViewController from RearVC
	
	target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();	
	
	if(makeScreenshoot == true) {
		target.delay(2);
		captureLocalizedScreenshot("bpViewController");
	}
}

function gotoFavoritControllerAndTakeScreenshoot(makeScreenshoot){
	// go to FavoritController from RearViewController_Hauptansicht
	
	target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
	
	if(makeScreenshoot == true) {	
		target.delay(1);
		captureLocalizedScreenshot("FavoritController");
	}
	target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();
}

function gotobpSettingsViewControllerAndTakeScreenshoot(makeScreenshoot,callDebuggingVC,callCategorySettingsVC) {
	// go to  bpSettingsViewController from RearViewController_Hauptansicht
	
	target.frontMostApp().mainWindow().tableViews()[0].cells()[4].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("bpSettingsViewController");
	}
	
	if(callCategorySettingsVC == true){
		gotobpCategorySettingsViewControllerAndTakeScreenshot(true);
	}
	
	if(callDebuggingVC == true){
		gotobpDebuggingViewControllerAndTakeScreenshoot(true);
	}
	//back to RearViewController_Hauptansicht	
	target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();
}	

function gotobpCategorySettingsViewControllerAndTakeScreenshot(makeScreenshoot) {
	//go to bpCategorySettingsViewController from bpSettingsViewController
	
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[0].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("bpCategorySettingsViewController");
	}
	//back to bpSettingsViewController
	target.frontMostApp().navigationBar().buttons()["backbuttoninactive"].tap();
}

function gotobpDebuggingViewControllerAndTakeScreenshoot(makeScreenshoot) {
	// go to gotobpDebuggingViewController from bpSettingsViewController
	
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[2].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("bpDebuggingViewController");
	}
	//back to bpSettingsViewController
	target.frontMostApp().navigationBar().buttons()["backbuttoninactive"].tap();
}

function gotobpAboutViewControllerAndTakeScreenshoot(makeScreenshoot) {
	// go to bpAboutViewController from RearViewController_Hauptansicht
	
	target.frontMostApp().mainWindow().tableViews()[0].cells()[5].tap();
	
	if(makeScreenshoot == true){
		target.delay(1);
		captureLocalizedScreenshot("bpAboutViewController");
	}
	//back to RearViewController_Hauptansicht
	target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();
}



function goToThinkShareViewControllerAndTakeScreenshoot(makeScreenshoot,callFacebookVC,callTwitterVC,callEmailVC) {
	//go to ThinkShareViewController from RearViewController_Hauptansicht
	
	target.frontMostApp().mainWindow().tableViews()[0].cells()[6].tap();
	
	if(makeScreenshoot == true){
		target.delay(1);
		captureLocalizedScreenshot("ThinkShareViewController");
	}
	
	if(callFacebookVC == true){
		goToThinkShareViewController_FacebookAndTakeScreenshoot(makeScreenshoot);
	}
	
	if(callTwitterVC == true){
		goToThinkShareViewController_TwitterAndTakeScreenshoot(makeScreenshoot);
	}
	
	if(callEmailVC == true){
		goToThinkShareViewController_EmailAndTakeScreenshoot(makeScreenshoot);
	}

	target.delay(2);
	
	//back to RearViewController_Hauptansicht
	target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();
	
}

function goToThinkShareViewController_FacebookAndTakeScreenshoot(makeScreenshoot){
	//go to ThinkShareViewController_Facebook from ThinkShareViewController
	
	target.frontMostApp().mainWindow().images()[2].images()[1].tap();
	// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
	if(makeScreenshoot == true){
		target.delay(3);
		captureLocalizedScreenshot("ThinkShareViewController_Facebook");
	}
}

function goToThinkShareViewController_TwitterAndTakeScreenshoot(makeScreenshoot){
	//go to ThinkShareViewController_Twitter from ThinkShareViewController
	
	target.frontMostApp().mainWindow().images()[2].images()[2].tap();
	// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
	if(makeScreenshoot == true){
		target.delay(3);
		captureLocalizedScreenshot("ThinkShareViewController_Twitter");
	}
}

function goToThinkShareViewController_EmailAndTakeScreenshoot(makeScreenshoot){
	//go to ThinkShareViewController_Email from ThinkShareViewController
	target.frontMostApp().mainWindow().images()[2].images()[3].tap();
	
	if(makeScreenshoot == true){
		target.delay(1);
		captureLocalizedScreenshot("ThinkShareViewController_Email");
	}
	//back to ThinkShareViewController
	target.frontMostApp().navigationBar().leftButton().tap();
	target.delay(2);
	target.frontMostApp().actionSheet().buttons()[0].tap();
}

function goToRearViewController_SearchAndTakeScreenshoot(makeScreenshoot,searchString) {
	//go to RearViewControllerSearch from RearViewController_Hauptansicht
	
	target.frontMostApp().mainWindow().searchBars()[0].tap();
	target.frontMostApp().keyboard().typeString(searchString);
	target.frontMostApp().keyboard().typeString("\n");	

	if(makeScreenshoot == true) {
		target.delay(2);
		captureLocalizedScreenshot("RearViewController_Search");
	}
	//back to RearViewController_Hauptansicht, following bpViewController
	target.tap({x:308.00, y:22.00});
}	
