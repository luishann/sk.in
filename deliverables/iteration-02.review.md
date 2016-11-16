# SK.IN/ Project Team 15

## Iteration 02 - Review & Retrospect

 * When: Tues Nov 15, 2016
 * Where: Online Skype meeting

## Process - Reflection:


For this iteration we knew that the process was going to be pivotal to meet the deadline and provide the functionality that our user was expecting. This time, we decided to make good use of TA office hours to get quick feedback on our work and how we could optimize the process. In order to focus our product we made extensive use of Slack, the new communication mechanism that we adopted. We were also able to meet on Skype more frequently which increased the completion task for each one of the features we planned to implement. 

#### Good decisions:


* We focused our product on a journal rather than a product review system. This allowed us to focus our efforts in a single user journey that solves a particular problem that our target audience currently has instead of unnecessarily broadening the scope of the application.
* For this iteration we switched our communication channel to Slack and this turned out to be a great decision for organizing our conversations. This allowed every person to join the channel relevant to their task and not be overwhelmed with messages that may not be relevant to what they were assigned to do.
    *  Slack Team - https://csc301teamgroup.slack.com
    *  Test User - email - testprojectteam15@gmail.com  password - 1234pqrs
* During this iteration we decided to make good use of TA Office Hours. During this extra time that we had with our TA, we were able to listen to his feedback, which was very useful to help us focus our efforts on building the core functionality of our application. For instance, he suggested that if the main goal of our application was to keep a journal of entries, we should not focus on rating products. This pivot made us work smarter and we were able to finish the required functionality by the deadline. 
* Expanding our use of Trello was a good idea because it helped us organize and prioritize tasks while assigning different, and at times multiple, people to each specific task. 
    *   Trello - https://trello.com/b/9vpWgPMC/csc301 
* Doing more Skype meetings instead of in person meetings was a good decision because in the first iteration it was very hard coordinating meetings that work with everyone’s schedules. Skype meetings however were more convenient and we’ve been able to have at least two meetings per week where everyone was present.


#### Not so good decisions:


* Distribution of work; we should have put more people to work on analytics as opposed to HTTP requests. We were using dummy data for our demo but we should’ve spent more time populating our database with information that modelled our domain.


* Assigning the work all in one meeting: in this iteration we decided to divide up all the tasks and assign them to each person in one meeting, as opposed to assigning them as we go. It turns out that we weren’t very good at gauging how long each task takes to complete, therefore the assignment was not as fair as we would’ve liked.


* Not assigning deadlines to tasks: some team members were assigned tasks that were dependent on the completion of other tasks but since we did not assign any deadlines, it was difficult for those people to finish their part of the project. 


* Choice of frameworks: turns out we did not do enough research on the available technology because we ended up coming across a lot of issues that forced us to change our choice of framework/technology. For example trying to force Spark (a Java framework) to work with PostgreSQL. We initially rationalized that we should use these two since everyone had some Java experience and was in the process of learning PSQL. However, it turned out that connecting Postgres with Spark on Heroku was a nightmare, and it was much faster to start from scratch on a Node.js server. One can evidence in our Trello board that we had to throw all of the cards that refer to this implementation away (even if we had completed them). 


#### Changes we plan to make:

* Use a Slack App that is called Mesasix Time Tracker. This way every time a group member starts working on the project he/she should send a /in message to our general channel. Then when that person finishes their work time the should log out with a /out. This way we will make sure nobody is doing significantly more work than the other team members and we will be able to help each other when one person in overwhelmed.


* Assign deadlines to tasks: we plan to assign deadlines to tasks to prioritize completing tasks/features that other tasks/features depend on. By doing this, we can then order the tasks by deadlines and complete them in order to avoid dependency issues. 


## Product - Review

#### Goals/tasks that were met/completed:


     The demo video and script - https://1drv.ms/f/s!ApfIYjFB2OV7uhLOC-70klzDRJ9k


* Implemented an add entry view that allows the user to choose picture, add a description for their entry, the date of when they are writing the entry and also a rating for their entry on that particular day
    *   Artifact can be found under /SkinCareApp/AddEntry.js, /SkinCareApp/ChoosePhoto
* Allow users to view and edit an existing entry
    * Artifact can be found under /SkinCareApp/EntryView.js
* Implemented a journal view that displays all the entries for each user
    *  Artifact can be found under /SkinCareApp/Journal.js
* Implemented entry analytics that describes the user’s progress over a duration of their entries, based on their ratings for entries (using dummy data)
    * Artifact can be found under /SkinCareApp/EntryAnalytics.js
* Implemented product analytics that analyzes each product’s usage over a duration of their entries (using dummy data)
    *  Artifact can be found under /SkinCareApp/ProductAnalytics.js
* Completed the navigation bar for the app
    * Artifact can be found under /SkinCareApp/index.android.js
* Created a working UX design for the app
    * The video demonstrates the UX
Host our server in a running instance of Heroku that is publicly accessible
A sample route is at https://lit-gorge-31410.herokuapp.com/users
* Implemented the database using postgres SQL
    * The schema and instructions on how to connect to it can be found under the database folder
* Wrote http requests, to retrieve data from and add data to the database. For example https requests to get an entry, edit an entry, add a product etc.
    * Artifact can be found in the secondary server repo under routes/routes.js (Full link: https://github.com/anisha-rohra/node-server/blob/master/routes/routes.js)
* Connected the frontend with the backend for products and journal entries
    * Artifact is in our secondary server repo entitled index.js



#### Goals/tasks that were planned but not met/completed:


* Capturing a photo using the user’s device, adding it to a journal entry and uploading it to our server: Finding a react native module that works with cameras in Android devices was more difficult than we anticipated so we were unable to finish implementing this feature on time. We ended up using dummy photos saved in our app’s source folder instead of on our server.


* Planned to do a user login/signup but didn’t do it as the TA advised to focus on analytics instead of adding a login functionality.


* We planned on implementing a DAO pattern to access our data. However, we ended up changing our back-end implementation and making it less object-oriented in general, precluding the need for a DAO. Specifically, right now we access the database via a single file routes.js. Routes.js contains the direct SQL queries which happen behind the scenes on every HTTP endpoint. 

### Unplanned goals/tasks that ended up being met/completed:


* Implementing a Product list view and the functionality of adding skincare products. We decided to add this task because a part of the analytics, our core feature of the app, relies on product ratings so we realized it was important to have a list of products so that users actually have something to rate.


### Going into the next iteration, our main insights are:


* Focus on the solo personal experience as opposed to the social networking features we previously wanted to incorporate. 
* Allow better documentation for entries, such as the functionality of taking pictures and choosing pictures from camera roll. Additionally, we will implement the feature of drawing on the picture that was taken for a particular entry. This way, the user will be able to focus their attention to a part of their face for future reference and focus their attention on that section of their face. 
* Enhance the analytics section of our application. Giving user the flexibility to set the preferred time range for the graph to show. Focus on making this functionality a core part of our application making it user friendly and intuitive for any user that wants to see a bigger picture of their overall progress.
* Focus on enhancing the UX design for the application, ensure that users not only find the application useful but also find it appealing and intuitive. Emphasise ease of use of comparing photos from different entries. 


