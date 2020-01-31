## UserLevels
Binding a StackedPane and disable property to the user level selection, e.g. Run, Operator etc., on the UI via local-binding. 

### Description
Note: This approach only hides content from sight and does not provide a secure access prevention to the hidden functionality. 

This sample provides a page with a StackedPane where the value property is bound to the selected user level. For each user level a different StackedView is presented.
The same page contains a button with its disabled property bound to the selected user level and unless the user level is minimum Operator, the button is disabled.  
The page source is defined at pages\pages\pages01\main.html
To access the user level an ui-local binding to a framework defined variable currentuser is necessary. Local bindings must currently be written in the code view of the UI builder with the element-tag local-binding. 
The user level object provides both the id and name of the selected user level. A converter function must be used to define which of these values is returned.
In this sample the id (0=Run, 1=Operator ...) is used. The converter functions are defined at pages\src\converter.ts and referenced in the binding.

### How to Run
This sample can be run on the Emulator or on a device. After starting, the user interface can be seen at the DevicePage in AppStudio or by using a web browser.
AppStudio version >= 3.0.0 is required. 
You can switch user levels by clicking on RUN in the lower left corner.

## More Information:
See the different tutorial on the UI-Builder 2 for more information

### Topics
User-Interface, Sample, user-levels, SICK-AppSpace
