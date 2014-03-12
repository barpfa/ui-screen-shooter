#import "automationfunctions.js"

// App Starts in bpViewController



//gotoRearViewControllerHauptansichtAndTakeScreenshoot(true);

//gotoFavoritControllerAndTakeScreenshoot(false);
//gotobpSettingsViewControllerAndTakeScreenshoot(true,false,true);
//goToThinkShareViewControllerAndTakeScreenshoot(true,true,false,false);
//gotobpAboutViewControllerAndTakeScreenshoot(true);
//goToRearViewController_SearchAndTakeScreenshoot(true,"Hund");
//goTobpViewControllerAndTakeScreenshoot(false);
//goTo_AddThinky_WithLocationAndTakeScreenshoot(true,"Garten","Dachauer Strasse 135, 80335 München" ,"Hecke schneiden, Rasen mähen, Unkraut rupfen, Gartenzwerg polieren.");
//goTo_DeleteThinky_FirstScreen_AndTakeScreenshoot(true);
goTo_AddThinky_WithTimeAndTakeScreenshoot(true,"Garten","10","33","AM","May","15","2019");



/*function goTo_AddThinky_WithLocationAndTakeScreenshoot(makeScreenshoot,eventString,searchString,detailString) {
	//go to TaskViewController_QuickEdit from bpViewController
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
		
	//call delete_Thinky via pressandhold on bpViewController-
	
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
*/

	//////////
		 
//Thinky_depending on time
function goTo_AddThinky_WithTimeAndTakeScreenshoot(makeScreenshoot,eventString,eventHOURstring,eventMINUTEstring,eventDAYTIMEstring,eventEndMONTHstring,eventEndDAYstring,eventEndYEARstring){
	//go goToTimeSettingsView_All from bpViewController via TaskViewController_QuickEdit
	
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
		captureLocalizedScreenshot("TimeSettingsViewController_Overview");
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
	target.frontMostApp().mainWindow().scrollViews()[0].dragInsideWithOptions({startOffset:{x:0.97, y:0.58}, endOffset:{x:0.95, y:0.32}, duration:1.4});
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[2].tap();
	target.frontMostApp().mainWindow().pickers()[0].wheels()[0].selectValue(eventEndMONTHstring);
	target.frontMostApp().mainWindow().pickers()[0].wheels()[1].selectValue(eventEndDAYstring);
	target.frontMostApp().mainWindow().pickers()[0].wheels()[2].selectValue(eventEndYEARstring);
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("TimeSettingsViewController_SetEndTime");																		
	}
	target.frontMostApp().navigationBar().buttons()[0].tap();
	
	//set_RepeatsUntilCompleted
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[2].tap();
	
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("TimeSettingsViewController_Overview2");
	}	

	target.frontMostApp().navigationBar().buttons()[0].tap();
	if(makeScreenshoot == true) {
		target.delay(1);
		captureLocalizedScreenshot("bpViewController_EventSetWithTimeOptions");
 	}
}
/*//set_Alarm_time

target.frontMostApp().windows()[0].scrollViews()[0].buttons()[0].tap();target.frontMostApp()
.mainWindow().pickers()[0].wheels()[0]. selectValue("8");
target.frontMostApp().windows()[0].pickers()[0].wheels()[1]. selectValue("20");
target.frontMostApp().mainWindow().pickers()[0].wheels()[2]. selectValue("AM");
target.delay(1);
//captureLocalizedScreenshot("TimeSettingsView_setTime");
target.frontMostApp().navigationBar().buttons()[0].tap();

//set_Recurring_thinky

target.frontMostApp().windows()[0].scrollViews()[0].buttons()[1].tap();
target.frontMostApp().windows()[0].pickers()[0].wheels()[1].tap();
//captureLocalizedScreenshot("TimeSettingsView_setRecurring");

//set_Enddate_thinky

target.frontMostApp().windows()[0].scrollViews()[0].buttons()[2].tap();
target.frontMostApp().mainWindow().pickers()[0].wheels()[0].selectValue[1];
target.frontMostApp().windows()[0].pickers()[0].wheels()[1].selectValue("9");
target.frontMostApp().windows()[0].pickers()[0].wheels()[2].selectValue("2015");
target.delay(1);
//captureLocalizedScreenshot("TimeSettingsView_setEnddate");
target.frontMostApp().navigationBar().buttons()[0].tap();
//screenshot_all_timeoptions_set
target.delay(1);
//captureLocalizedScreenshot("TimeSettingsView_AllSet");

target.frontMostApp().navigationBar().buttons()[0].tap();

//repeatthinky_until_completed

target.frontMostApp().windows()[0].scrollViews()[0].buttons()[2].tap();
target.delay(1);
//captureLocalizedScreenshot("TimeSettingsView_AllSet_Repeating");
target.frontMostApp().navigationBar().buttons()[0].tap();
*/





