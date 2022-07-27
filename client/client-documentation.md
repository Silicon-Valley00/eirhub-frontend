#### Introduction:     
When a user click on EiRHub to visit the site, the user is routed to the page, the Landing page. After the landing page comes the User Dashboard page after the user has registered through the Registration page.
Below goes into details the activities that goes on in these different pages.   

### Landing Page:      

### Registration Page:  

### User Dashboard:
After registration, a user is routed to this page. Based on the user status, the user is served with a patient's dashboard or a doctor's dashboard.
These pages have their own different sunb pages to serve to the user.
## Patient Dashboard Page:  
This page is dived into three sections to display components to user. Not all pages follow this format.
-  General components and other child pages are placed in a component folder while the subpages of the 
   Dashboard are placed in their own respective folders. 
-  Imports are made to use components in the subpages. Subpages are dispalyed based on selections made by a   
   user. Some sub pages are displayed along side their child pages. This is configured in a file where displays are made based on props received. This props tell what pages are to be displayed.
# Naviagtion  Bar:
   -  The navigation bar has 9 menu items that routes user to a selcted page when clicked. It is located at 
      the leftmost part ofthe dashbaord, taking the height of the device it is displayed with, and appears in all the pages of the dashboard. The menu items are the Dashboard, Profile, Records,Schedules, Medications, Find a Doctor, Mesages, Settings and Logout.
   -  The navigation bar has a hover effect effect taht aplies an animation to the menu items when hovered.
   -  Props received by the navigation component are used to specify the current sub page selected and also    
      help animate the component ,for certain devices, appear and disappear.



