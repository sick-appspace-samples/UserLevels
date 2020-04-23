## UserLevels
Using predefined user levels in the UI to hide/show content or whole pages.

### Description
**Note**: This approach only hides content from sight and does not provide a secure access prevention to the hidden functionality. 

#### Content on a page
This sample provides a page (runPage) with a StackedPane where the value property is bound to the selected user level. For each user level a different StackedView is presented.
The same page contains a button with its disabled property bound to the selected user level and unless the user level is minimum Operator, the button is disabled.  
The page source is defined at pages\pages\pages01\runPage.html
To access the user level an ui-local binding to a framework defined variable currentuser is necessary. Binding to this variable can be done by selecting the binding type "Local" in the binding dialog. The user level object provides both the id and name of the selected user level. Therefore it does not match the definition of the element property and "filter by type" must be deselected to allow a binding to currentuser . Also a converter function must be used to define which of these values is returned.
In this sample the id (0=Run, 1=Operator ...) is used. The converter functions are defined at pages\src\converter.ts and referenced in the binding.

#### Page in navigation
This sample provides additional pages which only appear in the navigation bar if the user is logged in with a minimum level. Currently only predefined user levels can be used.
The information if a page should be hidden unless a specific user level is logged in, is defined in the navigation.json. This file can be found at pages\pages\navigation.json. By default pages are visible for all levels. To hide pages for certain levels the according page has to be added referenced in the navigation.json with the value for the "user"  defining the minimum required user level. The "user" key accepts an array for future feature enhancements, but only one value is currently necessary. If more than one value is specified, than the least restricted will be active. 
Following pages and levels are used in this sample:
- runPage without user key is visible at all levels.
- operatorPage with "user": ["OPERATOR"] is only visible if user level is minimum OPERATOR.
- maintenancePage with "user": ["MAINTENANCE"] is only visible if user level is minimum MAINTENANCE. 


### How to Run
This sample can be run on the Emulator or on a device. After starting, the user interface can be seen at the DevicePage in AppStudio or by using a web browser.
AppStudio version >= 3.1.0 is required. 
You can switch user levels by clicking on RUN in the lower left corner.

### More Information:
See the different tutorial on the UI-Builder 2 for more information

### Topics
User-Interface, Sample, SICK-AppSpace
