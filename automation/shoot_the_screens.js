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


	/*!
 	* @function goTo_AddThinky_WithLocationAndTakeScreenshoot(makeScreenshoot,eventString,searchString,detailString)
 	* @abstract Goes to TaskViewController_QuickEdit and optional set an event via eventString.
	* Then optional set an adress via searchString.
	* Then optional set details for the event via detailString.
	* Then optional takes screenshoots.
 	* @discussion Has to start from bpViewController.
 	* @param makeScreenshoot TRUE takes screenshoots.
 	* @param eventString Sets a string for an event(e.g."Gartenparty").
	* @param searchString Sets a string for an adress (e.g."Augustenstrasse 20, 80333 München").
	* @param detailString Sets a string for eventdetails (e.g."Grillkohle, Kartoffelsalat, Alkoholfreies Bier").
 	*/
function goTo_AddThinky_WithLocationAndTakeScreenshoot(makeScreenshoot,eventString,searchString,detailString) {
	
	target.frontMostApp().navigationBar().tapWithOptions({tapOffset:{x:0.96, y:0.40}});
	target.delay(1);
	
	target.frontMostApp().keyboard().typeString(eventString);
	target.frontMostApp().keyboard().typeString("\n");
	target.frontMostApp().mainWindow().pickers()[0].wheels()[0].selectValue("FAMILY");
	target.frontMostApp().navigationBar().buttons()[1].tap();
	
	target.delay(1);
	
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[3].tap();
	target.frontMostApp().mainWindow().searchBars()[1].tap();
	target.frontMostApp().keyboard().typeString(searchString);
	target.frontMostApp().keyboard().typeString("\n");
	target.delay(3);
	target.frontMostApp().navigationBar().buttons()[0].tap();
	
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[4].tap();
	
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[5].tap();
	
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
	/*!
 	* @function goTo_DeleteThinky_FirstScreen_AndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to bpViewController, then optional delete an event and optional takes screenshots during the delete-steps.
 	* @discussion Has to start from bpViewController.
 	* @param TRUE takes a screenshoot.
 	*/
function goTo_DeleteThinky_FirstScreen_AndTakeScreenshoot(makeScreenshoot) {
	
	target.frontMostApp().mainWindow().scrollViews()[0].scrollViews()[2].textViews()[0].tapWithOptions({tapOffset:{x:0.15, y:0.68}, duration:4.4});
	
	if(makeScreenshoot == true) {
		target.delay(2);
		captureLocalizedScreenshot("bpViewController_Overlay_1");
	}
	
	
	target.delay(2);
	target.tap({x:299.00, y:321.00});	 // TODO: Accessibility Label hinzufügen
	
	if(makeScreenshoot == true){
		target.delay(3);
		captureLocalizedScreenshot("bpViewController_Overlay_2")
	}
	target.frontMostApp().mainWindow().buttons()["DELETE"].tap();
}	

	/*!
 	* @function  goTo_AddThinky_WithTimeAndTakeScreenshoot(makeScreenshoot,eventString,eventHOURstring,eventMINUTEstring,eventDAYTIMEstring,eventEndMONTHstring,eventEndDAYstring,eventEndYEARstring)
 	* @abstract Goes to TaskViewController_QuickEdit and and optional set an event via eventString.
	* Then optional set an alarmtime for the event via eventHOURstring,eventMINUTEstring and eventDAYTIMEstring.
	* Then optional set an endtime for the event via eventEndMONTHstring,eventEndDAYstring and eventEndYEARstring.
	* Optional takes screenshoots from the different Timesettingoptions.
	* @discussion Has to start from bpViewController.
 	* @param makeScreenshoot TRUE takes screenshoots.
	* @param eventString Sets a string for an event(e.g."Gartenparty").
	* @param eventHOURstring Sets a string for the hour of the alarmtime (e.g."1" from an array [1-12]).
	* @param eventMINUTEstring Sets a string for the minute of the alarmtime (e.g. "23" from an array [01-59]).
	* @param eventDAYTIMEstring Sets a string for the daytime of the alarmtime (e.g. "AM" from an array [AM,PM]). 
	* @param eventEndMONTHstring Sets a string for the month an event is ending (e.g. "March" from an array [January-December]).
	* @param eventEndDAYstring Sets a string for the month an event is ending (e.g. "30" from an array [1-31]depending on choosen month!!).
	* @param eventEndYEARstring Sets a string for the year an event is ending (e.g. "2017" from an array [2014-endless]must be a present or a future year!!).
 	*/
function goTo_AddThinky_WithTimeAndTakeScreenshoot(makeScreenshoot,eventString,eventHOURstring,eventMINUTEstring,eventDAYTIMEstring,eventEndMONTHstring,eventEndDAYstring,eventEndYEARstring){
		
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

	/*!
 	* @function goToCategoryViewControllerAndTakeScreenshoot(makeScreenshoot)
 	* @abstract Goes to CategoryViewController and optional takes a screenshoot.
	* discussion Has to start from bpViewController
 	* @param makeScreenshoot TRUE takes a screenshoot
	*/
function goToCategoryViewControllerAndTakeScreenshoot(makeScreenshoot) {
	
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

