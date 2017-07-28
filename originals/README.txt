

As part of the interview process with Signet Inc. we have a coding challenge which resembles actual work you may be performing in your position. The purpose of this challenge is to allow us insight into how you tackle a problem and also give you the opportunity to display your abilities as well as get some basic context around the work you might be doing.

Your objective is to write an angular front end application / simple backend which displays a welcome screen to customers visiting a corporate office. Details on the two pieces follow:





Simple Back End
==========================

The simple backend should provide the front end Angular application with the information it needs to display the correct information. The backend should consume the supplied "schedule_data.json" file and provide two API calls which the Angular app can use; one call to get the schedule for a given time range and another call to get the agenda events for a specific visit.

    schedule_data.json format
    ---------------------------------
    
    The provided schedule_data.json file contains two keys. Key "customer_visits" contains information about when customers are visiting. Key "visit_events" contains a list of agenda items for all visits.

Though Node.js or PHP are preferred, please write the backend in whichever language you feel most comfortable / proficient. Please keep language and API design best practices in mind.

==========================





Angular Front End
==========================

You can find a mockup of the application in the "mockups" folder; there are pngs for the two views and a psd as well. If you don't have photoshop don't worry about exact sizing and positioning, just go with whatever looks close. The application should target a screen size of 1280 x 720px and the font used is Lato Italic. The fonts needed are included in the "fonts" folder.

The front end will need to use Angular communicate with the back end to determine what customer (if any) is currently visiting, get their information, and then tailor the content accordingly.

The application has 2 views. The first view is a welcome screen which consists of a text box with the customer's name and a dynamic background image, based on the customer's industry. The background images for each industry are in the "images" folder and are named in the format [industry_name].jpg -- There are only 4 industrys for this sample problem, but in the real world there could be very many industries so please keep that in mind when dynamically displaying the background image.

The second view is an agenda which displays the events for the customer's visit, with the same background image as the first view. When an event has passed it should no longer be displayed on the agenda. Further, if there are no agenda items or no remaining agenda items, the agenda view should not be displayed.

When there are no customers, a "general" industry background is displayed and the welcome view just reads "Welcome to the Briefing Center".

While designing the front end please consider user experience such as content transitions. Please also keep Angular best practices in mind.

==========================




Submitting
==========================

Please create a GitHub repository with your challenge and, when finished, send us a link to the repo. If it is a private repository, please also give us viewing permission. If you prefer not to use a GitHub submission, please provide a zipped folder with your code and submit that.

The submission should include instructions needed to install/setup and run the application and backend.

==========================




If you have any questions at all please feel free to reach out to your contact at Signet.


NOTE: This is a contrived problem for the purpose of candidate evaluation and the work done shall be solely used in such capacity. It will not be used in any other way in which Signet Inc. might materially benefit.