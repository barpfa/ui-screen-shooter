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
target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();
target.delay(1);
captureLocalizedScreenshot("RearViewController_Hauptansicht");

target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
target.delay(1);
captureLocalizedScreenshot("FavoritController");

target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();

target.frontMostApp().mainWindow().tableViews()[0].cells()[4].tap();
target.delay(1);
captureLocalizedScreenshot("bpSettingsViewController");

target.frontMostApp().mainWindow().scrollViews()[0].buttons()[0].tap();
target.delay(1);
captureLocalizedScreenshot("bpCategorySettingsViewController");

target.frontMostApp().navigationBar().buttons()["backbuttoninactive"].tap();

target.frontMostApp().mainWindow().scrollViews()[0].buttons()[2].tap();
target.delay(1);
captureLocalizedScreenshot("bpDebuggingViewController");

target.frontMostApp().navigationBar().buttons()["backbuttoninactive"].tap();target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();

target.frontMostApp().mainWindow().tableViews()[0].cells()[5].tap();
target.delay(1);
captureLocalizedScreenshot("bpAboutViewController");

target.frontMostApp().navigationBar().buttons()["menu inactive"].tap();

//come to Main_View_Share
target.frontMostApp().mainWindow().tableViews()[0].cells()[6].tap();
target.delay(1);
captureLocalizedScreenshot("ThinkShareViewController");
target.delay(1);

//come to View_Facebook_Share
target.frontMostApp().mainWindow().images()[2].images()[1].tap();
// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
target.delay(4);
captureLocalizedScreenshot("ThinkShareViewController_Facebook");
target.delay(4);

target.frontMostApp().mainWindow().images()[2].images()[2].tap();
// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
target.delay(1);
captureLocalizedScreenshot("ThinkShareViewController_Twitter");
target.delay(2);

target.frontMostApp().mainWindow().images()[2].images()[3].tap();
target.delay(1);
captureLocalizedScreenshot("ThinkShareViewController_Email");
target.frontMostApp().navigationBar().leftButton().tap();
target.delay(2);

target.frontMostApp().actionSheet().buttons()[0].tap();
target.frontMostApp().navigationBar().tapWithOptions({tapOffset:{x:0.02, y:0.67}});

target.frontMostApp().mainWindow().searchBars()[0].tap();
target.frontMostApp().keyboard().typeString("Fa\n");
target.delay(5);
captureLocalizedScreenshot("RearViewController_suche");
target.delay(1);

target.tap({x:307.50, y:13.00});
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();

target.delay(1);
captureLocalizedScreenshot("bpViewController_leer");
target.delay(1);

//add_thinky_withPlace_selectFavorite_selectPrioriziation_____byADDsymbole

target.frontMostApp().navigationBar().tapWithOptions({tapOffset:{x:0.98, y:0.68}});
target.frontMostApp().keyboard().typeString("Diaet\n");
target.frontMostApp().mainWindow().pickers()[0].wheels()[0]. selectValue("ME/HEALTH");
target.frontMostApp().navigationBar().buttons()[1].tap();
target.delay(2);

target.frontMostApp().mainWindow().scrollViews()[0].buttons()[3].tap();
target.delay(2);
//captureLocalizedScreenshot("MainMapView");
target.frontMostApp().mainWindow().searchBars()[1].tap();
target.frontMostApp().keyboard().typeString("Theresienstrasse 89\n");
target.delay(2);
captureLocalizedScreenshot("AddMapViewController");
target.frontMostApp().navigationBar().buttons()[0].tap();
target.delay(2);

//favorisierung
target.frontMostApp().mainWindow().scrollViews()[0].buttons()[4].tap();
target.delay(2);
captureLocalizedScreenshot("TaskViewController");

//priorisierung
target.frontMostApp().mainWindow().scrollViews()[0].buttons()[5].tap();


target.frontMostApp().navigationBar().buttons()[0].tap();
target.delay(2);
captureLocalizedScreenshot("bpViewController");























