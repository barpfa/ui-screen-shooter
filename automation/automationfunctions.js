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

	
	/*!
 	* @function gotoRearViewControllerHauptansichtAndTakeScreenshoot(makeScreenshot)
 	* @abstract Goes to RearViewController_Hauptansicht and optional takes a screenshoot.
 	* @discussion Has to start in bpViewController.
 	* @param makeScreenshot TRUE takes a screenshoot.
 	*/
 	
function gotoRearViewControllerHauptansichtAndTakeScreenshoot(makeScreenshot){ 	
	target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();
	
	if(makeScreenshot == true){
		target.delay(1);
		captureLocalizedScreenshot("RearViewController_Hauptansicht");
	}
}

	/*!
 	* @function goTobpViewControllerAndTakeScreenshoot(makeScreenshoot,callMainMapVC,callbpVCPriority,callbpVCThirdPartyContent)
 	* @abstract Goes to bpViewController and optional takes a screenshoot. 
 	* Then optional goes to MainMapViewController and optional takes screenshoots. 
 	* Then optional goes to bpViewController_Priority and optional take a screenshoot.
 	* Then optional goes to bpViewControllerThirdPartyContent and optional take a screenshoot.
 	* @discussion Has to start from bpViewController. 
 	* @param makeScreenshoot TRUE takes screenshoots of all shown views.
 	* @param callMainMapVC TRUE will call the goToMainMapViewControllerAndTakeScreenshoot function.
 	* @param callbpVCPriority TRUE will call the goTobpViewController_PriorityAndTakeScreenshoot function.
 	* @param callbpVCThirdPartyContent TRUE will call the goTobpViewControllerThirdPartyContentAndTakeScreenshoot function.
 	*/
function goTobpViewControllerAndTakeScreenshoot(makeScreenshoot,callMainMapVC,callbpVCPriority,callbpVCThirdPartyContent){

	target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();	
	
	if(makeScreenshoot == true) {
		target.delay(2);
		captureLocalizedScreenshot("bpViewController");
	}
	
	if(callMainMapVC == true) {
		goToMainMapViewControllerAndTakeScreenshoot(makeScreenshoot);
	}
	
	if(callbpVCPriority == true) {
		goTobpViewController_PriorityAndTakeScreenshoot(makeScreenshoot);
	}
	
	if(callbpVCThirdPartyContent == true) {
		goTobpViewControllerThirdPartyContentAndTakeScreenshoot(makeScreenshoot);
	}
}

	/*!
 	* @function goTobpViewControllerThirdPartyContentAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to bpViewControllerThirdPartyContent and optional takes a screenshoot. 
 	* @discussion Has to start from bpViewController. 
 	* @param makeScreenshoot TRUE takes a screenshoots.
 	*/
function goTobpViewControllerThirdPartyContentAndTakeScreenshoot(makeScreenshoot) {
	
	target.frontMostApp().navigationBar().segmentedControls()[0].buttons()[2].tap();

	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("bpViewController_ThirdPartyContent");
		}

	target.frontMostApp().navigationBar().segmentedControls()[0].buttons()[2].tap();	
}


	/*!
 	* @function goToMainMapViewControllerAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to MainMapViewController and optional takes a screenshoot. 
 	* @discussion Has to start from bpViewController. 
 	* @param makeScreenshoot TRUE takes a screenshoot.
 	*/
function goToMainMapViewControllerAndTakeScreenshoot(makeScreenshoot){

	target.frontMostApp().navigationBar().segmentedControls()[0].buttons()[0].tap();

	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("MainMapViewController_zoomedin");	
	}

	target.frontMostApp().mainWindow().buttons()["locate"].tap();

	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("MainMapViewController_wide");	
	}

	target.frontMostApp().navigationBar().segmentedControls()[0].buttons()[0].tap();
	target.delay(1);
}
	/*!
 	* @function goTobpViewController_PriorityAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to bpViewController_Priority and optional takes a screenshoot. 
 	* @discussion Has to start from bpViewController. 
 	* @param makeScreenshoot TRUE takes a screenshoot.
 	*/
	//go to bPViewController_Priority
function goTobpViewController_PriorityAndTakeScreenshoot(makeScreenshoot) {

	target.frontMostApp().navigationBar().segmentedControls()[0].buttons()[1].tap();

	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("bpViewController_Priority");
		}

	target.frontMostApp().navigationBar().segmentedControls()[0].buttons()[1].tap();
	target.delay(1);
}

	/*!
 	* @function gotoFavoritControllerAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to FavoritController and optional take a screenshoot.
 	* @discussion Has to start from RearViewController_Hauptansicht.
 	* @param makeScreenshoot TRUE takes a screenshoot.
 	*/
function gotoFavoritControllerAndTakeScreenshoot(makeScreenshoot){
	
	target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
	
	if(makeScreenshoot == true) {	
		target.delay(1);
		captureLocalizedScreenshot("FavoritController");
	}
	target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();
}

	/*!
 	* @function gotobpSettingsViewControllerAndTakeScreenshoot(makeScreenshoot,callDebuggingVC,callCategorySettingsVC)
 	* @abstract Goes to bpSettingsViewController and optional take a screenshoot.  
 	* Then optional goes to bpCategorySettingsViewController and optional take a screenshoot.
 	* Then optional goes to bpDebuggingViewController and optional take a screenshoot.
 	* @discussion Has to start from RearViewController_Hauptansicht.
 	* @param makeScreenshoot TRUE takes screenshoots of all shown views.
 	* @param callDebuggingVC TRUE will call the gotobpDebuggingViewControllerAndTakeScreenshoot function.
 	* @param callCategorySettingsVC TRUE will call the otobpCategorySettingsViewControllerAndTakeScreenshot function.
 	*/
function gotobpSettingsViewControllerAndTakeScreenshoot(makeScreenshoot,callDebuggingVC,callCategorySettingsVC) {
	
	target.frontMostApp().mainWindow().tableViews()[0].cells()[4].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("bpSettingsViewController");
	}
	
	if(callCategorySettingsVC == true){
		gotobpCategorySettingsViewControllerAndTakeScreenshoot(makeScreenshoot);
	}
	
	if(callDebuggingVC == true){
		gotobpDebuggingViewControllerAndTakeScreenshoot(makeScreenshoot);
	}
	target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();
}	

	/*!
 	* @function gotobpCategorySettingsViewControllerAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to bpCategorySettingsViewController and optional takes a screenshoot. 
 	* @discussion Has to start from bpSettingsViewController. 
 	* @param makeScreenshoot TRUE takes a screenshoot.
 	*/
function gotobpCategorySettingsViewControllerAndTakeScreenshoot(makeScreenshoot) {
	
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[0].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("bpCategorySettingsViewController");
	}
	target.frontMostApp().navigationBar().buttons()["backbuttoninactive"].tap();
}

	/*!
 	* @function gotobpDebuggingViewControllerAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to bpDebuggingViewController and optional takes a screenshoot. 
 	* @discussion Has to start from bpSettingsViewController. 
 	* @param makeScreenshoot TRUE takes a screenshoot.
 	*/
function gotobpDebuggingViewControllerAndTakeScreenshoot(makeScreenshoot) {
	
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[2].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("bpDebuggingViewController");
	}
	target.frontMostApp().navigationBar().buttons()["backbuttoninactive"].tap();
}

	/*!
 	* @function gotobpAboutViewControllerAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to bpAboutViewController and optional takes a screenshoot.
 	* @discussion Has to start from RearViewController_Hauptansicht.
 	* @param makeScreenshoot TRUE takes a screenshoot.
 	*/
function gotobpAboutViewControllerAndTakeScreenshoot(makeScreenshoot) {
	
	target.frontMostApp().mainWindow().tableViews()[0].cells()[5].tap();
	
	if(makeScreenshoot == true){
		target.delay(1);
		captureLocalizedScreenshot("bpAboutViewController");
	}
	//back to RearViewController_Hauptansicht
	target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();
}

	/*!
 	* @function goToThinkShareViewControllerAndTakeScreenshoot(makeScreenshoot,callFacebookVC,callTwitterVC,callEmailVC)
 	* @abstract Goes to ThinkShareViewController and optional takes a screenshoot. 
 	* Then optional goes to ThinkShareViewController_Facebook and take a screenshoot.
 	* Then optional goes to ThinkShareViewController_Twitter and take a screenshoot.
 	* Then optional goes to ThinkShareViewController_Email and take a screenshoot.
 	* @discussion Has to start from RearViewController_Hauptansicht.
 	* @param  makeScreenshoot TRUE takes a screenshoot.
 	* @param  callFacebookVC TRUE will call the goToThinkShareViewController_FacebookAndTakeScreenshoot function.
 	* @param  callTwitterVC TRUE will call the goToThinkShareViewController_TwitterAndTakeScreenshoot function.
 	* @param  callEmailVC TRUE will call the goToThinkShareViewController_EmailAndTakeScreenshoot function.
 	*/
function goToThinkShareViewControllerAndTakeScreenshoot(makeScreenshoot,callFacebookVC,callTwitterVC,callEmailVC) {
	
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
	/*!
 	* @function goToThinkShareViewController_FacebookAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to ThinkShareViewController_Facebook and optional takes a screenshoot. 
 	* @discussion Has to start from ThinkShareViewController. 
 	* @param makeScreenshoot TRUE takes a screenshoot.
 	*/
function goToThinkShareViewController_FacebookAndTakeScreenshoot(makeScreenshoot){
	
	target.frontMostApp().mainWindow().images()[2].images()[1].tap();
	// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
	if(makeScreenshoot == true){
		target.delay(3);
		captureLocalizedScreenshot("ThinkShareViewController_Facebook");
	}
}
	/*!
 	* @function goToThinkShareViewController_TwitterAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to ThinkShareViewController_Twitter and optional takes a screenshoot. 
 	* @discussion Has to start from ThinkShareViewController. 
 	* @param makeScreenshoot TRUE takes a screenshoot.
 	*/
function goToThinkShareViewController_TwitterAndTakeScreenshoot(makeScreenshoot){
	
	target.frontMostApp().mainWindow().images()[2].images()[2].tap();
	// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
	if(makeScreenshoot == true){
		target.delay(3);
		captureLocalizedScreenshot("ThinkShareViewController_Twitter");
	}
}
	/*!
 	* @function goToThinkShareViewController_EmailAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to ThinkShareViewController_Email and optional takes a screenshoot. 
 	* @discussion Has to start from ThinkShareViewController. 
 	* @param makeScreenshoot TRUE takes a screenshoot.
 	*/
function goToThinkShareViewController_EmailAndTakeScreenshoot(makeScreenshoot){
	
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
	/*!
 	* @function goToRearViewController_SearchAndTakeScreenshoot(makeScreenshoot,searchString)
 	* @abstract Goes to RearViewController_Search and optional set a search via searchString, then optional takes a screenshoot.
 	* @discussion Has to start from RearViewController_Hauptansicht.
 	* @param makeScreenshoot TRUE takes a screenshoot.
 	* @param searchString Set a string (e.g. "House").
 	*/
function goToRearViewController_SearchAndTakeScreenshoot(makeScreenshoot,searchString) {
	
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
