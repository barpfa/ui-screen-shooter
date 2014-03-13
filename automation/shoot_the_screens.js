#import "automationfunctions.js"

// App Starts in bpViewController



gotoRearViewControllerHauptansichtAndTakeScreenshoot(true);

gotoFavoritControllerAndTakeScreenshoot(true);
gotobpSettingsViewControllerAndTakeScreenshoot(true,true,true);
goToThinkShareViewControllerAndTakeScreenshoot(true,true,true,true);
gotobpAboutViewControllerAndTakeScreenshoot(true);
goToRearViewController_SearchAndTakeScreenshoot(true,"Hund");
goTobpViewControllerAndTakeScreenshoot(true);
goTo_AddThinky_WithLocationAndTakeScreenshoot(true,"Garten","Dachauer Strasse 135, 80335 München" ,"Hecke schneiden, Rasen mähen, Unkraut rupfen, Gartenzwerg polieren.");
goTo_DeleteThinky_FirstScreen_AndTakeScreenshoot(true);
goTo_AddThinky_WithTimeAndTakeScreenshoot(true,"Garten","10","33","AM","May","15","2019");

goToCategoryViewControllerAndTakeScreenshoot(true);

function goTo_AddThinky_WithLocationAndTakeScreenshoot(makeScreenshoot,eventString,searchString,detailString) {
	//go to TaskViewController_QuickEdit from bpViewController
	/*!
 	* @function goTo_AddThinky_WithLocationAndTakeScreenshoot
 	* @abstract takes a screenshoot from TaskViewController_1 (without placed event) and TaskViewController_2 (with placed event)
 	* Use goTo_AddThinky_WithLocationAndTakeScreenshoot to get a current screenshoot of the TaskViewController_1 and TaskViewController_2.
 	* @param to get a screenshoot set var makeScreenshot to true and set for var eventString any string you like and set any adress-string for var searchString
	* in form of streetname and number, zipcode city (e.g. Maximilianstrasse 125, 80539 München) and set any string you like for var detailString for goTo_AddThinky_WithLocationAndTakeScreenshoot.
 	*/
	
	target.frontMostApp().navigationBar().tapWithOptions({tapOffset:{x:0.96, y:0.40}});
	target.delay(1);
	//add eventAndchooseCategory for event
	target.frontMostApp().keyboard().typeString(eventString);
	target.frontMostApp().keyboard().typeString("\n");
	target.frontMostApp().mainWindow().pickers()[0].wheels()[0].selectValue("FAMILY");
	target.frontMostApp().navigationBar().buttons()[1].tap();
	
	target.delay(1);
	//add location for event
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[3].tap();
	target.frontMostApp().mainWindow().searchBars()[1].tap();
	target.frontMostApp().keyboard().typeString(searchString);
	target.frontMostApp().keyboard().typeString("\n");
	target.delay(3);
	target.frontMostApp().navigationBar().buttons()[0].tap();
	
	
	//favorize event
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[4].tap();
	
	//priorization of event
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[5].tap();
	
	//add details for Event
	target.delay(1);
	target.frontMostApp().mainWindow().scrollViews()[0].textViews()[1].tap();
	target.frontMostApp().keyboard().typeString(detailString);
	target.frontMostApp().mainWindow().staticTexts()[0].tap();
	
	if(makeScreenshoot == true) {
		target.delay(2);
		captureLocalizedScreenshot("TaskViewController_1");
	}

	target.frontMostApp().navigationBar().buttons()[0].tap();
	
	if(makeScreenshoot == true) {
		target.delay(2);
		captureLocalizedScreenshot("TaskViewController_2");
	}
}

function goTo_DeleteThinky_FirstScreen_AndTakeScreenshoot(makeScreenshoot) {
	//call delete_Thinky via pressandhold on bpViewController
	/*!
 	* @function goTo_DeleteThinky_FirstScreen_AndTakeScreenshoot
 	* @abstract takes a screenshoot from bpViewController_Overlay_1 (right delete_bar) and bpViewController_Overlay_2 (bottom delete_bar)
 	* Use goTo_DeleteThinky_FirstScreen_AndTakeScreenshoot to get a current screenshoot of the bpViewController_Overlay_1 and bpViewController_Overlay_2.
 	* @param to get a screenshoot set var makeScreenshot to true for goTo_AddThinky_WithLocationAndTakeScreenshoot.
 	*/
	
	target.frontMostApp().mainWindow().scrollViews()[0].scrollViews()[2].textViews()[0].tapWithOptions({tapOffset:{x:0.15, y:0.68}, duration:4.4});
	
	if(makeScreenshoot == true) {
		target.delay(2);
		captureLocalizedScreenshot("bpViewController_Overlay_1");
	}
	
	//delete_Thinky via X-button
	target.delay(2);
	target.tap({x:299.00, y:321.00});	 // TODO: Accessibility Label hinzufügen
	
	if(makeScreenshoot == true){
		target.delay(3);
		captureLocalizedScreenshot("bpViewController_Overlay_2")
	}
	target.frontMostApp().mainWindow().buttons()["DELETE"].tap();
}	


function goTo_AddThinky_WithTimeAndTakeScreenshoot(makeScreenshoot,eventString,eventHOURstring,eventMINUTEstring,eventDAYTIMEstring,eventEndMONTHstring,eventEndDAYstring,eventEndYEARstring){
	//go goToTimeSettingsView_All from bpViewController via TaskViewController_QuickEdit
	//go to TaskViewController_QuickEdit from bpViewController
	/*!
 	* @function goTo_AddThinky_WithTimeAndTakeScreenshoot
 	* @abstract takes a screenshoot from TimeSettingsViewController_Overview1(timeoptions not set), TimeSettingsViewController_AlarmTime, TimeSettingsViewController_SetRecurringToDaily, 
	* TimeSettingsViewController_SetEndTime, TimeSettingsViewController_Overview2(timeoptions set), bpViewController_EventSetWithTimeOptions.
	* Use goTo_AddThinky_WithTimeAndTakeScreenshoot to get a current screenshoot of the TimeSettingsViewController_Overview1(timeoptions not set), TimeSettingsViewController_AlarmTime,
	* TimeSettingsViewController_SetRecurringToDaily, TimeSettingsViewController_SetEndTime, TimeSettingsViewController_Overview2(timeoptions set), bpViewController_EventSetWithTimeOptions.
 	* @param to get a screenshoot set var makeScreenshot to true, set for var eventString any string you like, set any string(from 1-12) for var eventHOURstring, set any string(from 00-59) for 
	* var eventMINUTEstring, set any string(AM or PM) for var eventDAYTIMEstring, set any string (January-December) for var eventEndMONTHstring, set any string (1-28/29/30/31) for var eventEndDAYstring,
	* set any string (2014-endless) for var eventEndYEARstring for goTo_AddThinky_WithTimeAndTakeScreenshoot.
 	*/
	
	target.frontMostApp().navigationBar().tapWithOptions({tapOffset:{x:0.96, y:0.40}});
	target.delay(1);
	//add eventAndchooseCategory for event
	
	target.frontMostApp().keyboard().typeString(eventString);
	target.frontMostApp().keyboard().typeString("\n");
	target.frontMostApp().mainWindow().pickers()[0].wheels()[0].selectValue("FAMILY");
	target.frontMostApp().navigationBar().buttons()[1].tap();
	
	//goTo_TimeSettingsViewController_Overview
	target.frontMostApp().mainWindow().scrollViews()[0].staticTexts()[0].tap();
	if(makeScreenshoot == true) {
		target.delay(1);
		//time not set yet
		captureLocalizedScreenshot("TimeSettingsViewController_Overview1");
	}
	//set_AlarmTime
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[0].tap();
	target.frontMostApp().mainWindow().pickers()[0].wheels()[0].selectValue(eventHOURstring);
	target.frontMostApp().mainWindow().pickers()[0].wheels()[1].selectValue(eventMINUTEstring);
	target.frontMostApp().mainWindow().pickers()[0].wheels()[2].selectValue(eventDAYTIMEstring);
	
	if(makeScreenshoot == true) {
		target.delay(2);
		captureLocalizedScreenshot("TimeSettingsViewController_AlarmTime");
	}
	target.frontMostApp().navigationBar().buttons()[0].tap();
	
	//set_Recurring
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[1].tap();
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("TimeSettingsViewController_SetRecurringToDaily");
	}																	
	target.frontMostApp().navigationBar().buttons()[0].tap();
																			
	//set_EndDate
	target.frontMostApp().mainWindow().scrollViews()[0].dragInsideWithOptions({startOffset:{x:0.51, y:0.44}, endOffset:{x:0.50, y:0.27}, duration:2.6});
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[2].tap();
	target.frontMostApp().mainWindow().pickers()[0].wheels()[0].selectValue(eventEndMONTHstring);
	target.frontMostApp().mainWindow().pickers()[0].wheels()[1].selectValue(eventEndDAYstring);
	target.frontMostApp().mainWindow().pickers()[0].wheels()[2].selectValue(eventEndYEARstring);
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("TimeSettingsViewController_SetEndTime");																		
	}
	target.frontMostApp().navigationBar().buttons()["savebuttoninactive"].tap();
	target.delay(2);
	target.frontMostApp().navigationBar().buttons()["savebuttoninactive"].tap();
	
	//set_RepeatsUntilCompleted
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[2].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("TimeSettingsViewController_Overview2");
	}	
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[5].tap();
	target.frontMostApp().navigationBar().buttons()[0].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("bpViewController_EventSetWithTimeOptions");
 	}
}

function goToCategoryViewControllerAndTakeScreenshoot(makeScreenshoot) {
	// go to CategoryViewController from bpViewController
	/*!
 	* @function goTo_AddThinky_WithLocationAndTakeScreenshoot
 	* @abstract takes a screenshoot from TaskViewController_1 (without placed event) and TaskViewController_2 (with placed event)
 	* Use goTo_AddThinky_WithLocationAndTakeScreenshoot to get a current screenshoot of the TaskViewController_1 and TaskViewController_2.
 	* @param to get a screenshoot set var makeScreenshot to true and set for var eventString any string you like and set any adress-string for var searchString
	* in form of streetname and number, zipcode city and set any string you like for var detailString for goTo_AddThinky_WithLocationAndTakeScreenshoot.
 	*/
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[6].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("CategoryViewController_View1");
 	}
	
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[0].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("CategoryViewController_View2");
 	}
	target.frontMostApp().navigationBar().buttons()["backbuttoninactive"].tap();
	
}

