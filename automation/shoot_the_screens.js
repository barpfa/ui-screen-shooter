#import "automationfunctions.js"

// App Starts in bpViewController



gotoRearViewControllerHauptansichtAndTakeScreenshoot(true);

gotoFavoritControllerAndTakeScreenshoot(false);
//gotobpSettingsViewControllerAndTakeScreenshoot(true,false,true);
goToThinkShareViewControllerAndTakeScreenshoot(true,true,false,false);
gotobpAboutViewControllerAndTakeScreenshoot(true);
//goToRearViewController_SearchAndTakeScreenshoot(true,"Hund");
goTobpViewControllerAndTakeScreenshoot(false);








//////////
		 
//Thinky_depending on time
function goToTimeSettingsView_AllAndTakeScreenshoot(makeScreenshoot){
	//go goToTimeSettingsView_All from bpViewController
	target.frontMostApp().navigationBar().tapWithOptions({tapOffset:{x:0.96, y:0.17}});
	target.frontMostApp().keyboard().typeString("Garten\n");
	target.frontMostApp().mainWindow().pickers()[0].wheels()[0]. selectValue("FAMILY");
	target.frontMostApp().navigationBar().buttons()[1].tap();
	target.frontMostApp().mainWindow().scrollViews()[0].staticTexts()[0].tap();
	target.delay(1);
	if(makeScreenshoot == true) {	
		captureLocalizedScreenshot("TimeSettingsView_All");
	}
}
//set_Alarm_time

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















