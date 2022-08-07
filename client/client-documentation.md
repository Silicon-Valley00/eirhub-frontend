#### Introduction:     
When a user clicks on EirHub to visit the site, the user is routed to the page, the Landing page. After the landing page comes the User Dashboard page after the user has registered through the Registration page.

Below is a detailed description of how the pages function.
  

### Landing Page:      

### Registration Page:
The registration page allows both doctors and patients to sign up or log in to EirHub. It is in the form of a modal. For doctors, when signing up, their first name, last name, email, hospital code, and password is taken. For patients, their first name, last name, date of birth, email, and password are taken. Both parties need to provide their email and password when logging in. The registration page checks all credentials to guarantee their semantic integrity before sending them to the database.

### User Dashboard:
After registration, a user is routed to this page. Based on the user status, the user is served with a patient's dashboard or a doctor's dashboard.
These pages have their different sub-pages to serve to the user.
## Patient Dashboard Page:  
This page is divided into three sections to display components to the user. Not all pages follow this format.
-  General components and other child pages are placed in a component folder while the subpages of the dashboard are placed in their respective folders. 
-  Imports are made to use components in the subpages. Subpages are displayed based on selections made by a   
   user. Some sub-pages are displayed alongside their child pages. This is configured in a file where displays are made based on props received. These props tell what pages are to be displayed.
# Navigation  Bar:
   -  The navigation bar has 9 menu items that route the user to a selected page when clicked. It is located at 
      the leftmost part of the dashboard, taking the height of the device it is displayed with, and appears on all the pages of the dashboard. The menu items are the Dashboard, Profile, Records, Schedules, Medications, Find a Doctor, Messages, Settings, and Logout.
   -  The navigation bar has a hover effect that applies an animation to the menu items when hovered.
   -  Props received by the navigation component are used to specify the current sub-page selected and also    
      help animate the component, for certain devices, appear and disappear.



