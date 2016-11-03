# sk.in application

## Iteration 02

 * Start date: October 26, November 2
 * End date: November 14

## Process 
 **Introduction**
Discussed and changed the database schema, specifically the Issues tables. Decided that we wanted users to focus on products and product ratings, and to use issues as a tagging / organization system, so that they can sort their journal entries by the issues they tagged in them. However, the main focus of the app will be adding and rating products for every entry.

Went through a product backlog of all features we want implemented in the app. Decided which specific features would be implemented for this iteration of the app.

Discussed how to design the front-end of the android application. Initially intended to use Android Studio, but held a standing meeting on Skype when a member mentioned ReactNative as an alternate model. Changed features on Trello to reflect these changes.

#### Roles & responsibilities

**Front-end Developers:**
- Shannon, Radhika
-> Learn the basics of ReactNative through online tutorials
-> Be the "expertise", in that you help the rest of the team with any questions they have with regards to front end development
-> Responsible for ensuring that all views work (even those made by other people), i.e. testing

**Back-end Developers:**
- Nikita, Sara, John
-> The java developers
-> In charge of back-end code design (i.e. CRC cards level)
-> Find opportunities to implement interfaces and design patterns
-> Test all back-end code

**Communication Editor:**
- Anisha
-> Write up plan and review files
-> Proof read all written work, including comments, documentation, and minutes
-> Copy editor for all oral communication

**TA Liaison:**
- Nikita
-> Ensure communication with our TA
-> Plan meetings with TA / attend office hours and tutorials
-> Provide feedback from TA to the rest of the team

**Researcher:**
- Sebastian
-> Go-to person for information about new areas of development
-> Finds relevant tutorials to help us learn new topics
-> Researches for the application itself (i.e. where to find skin care product list)

#### Events

Had a meeting in which we assigned specific tasks on Trello to individuals/groups on October 26 and again on November 1. Decided to have most of the tasks finished by November 6. 

Online "standing" Skype meeting on November 6 to see how far along we are on your mini-deadline tasks, reassign people who are done on future tasks or help people who are struggling to finish.

Meet on November 7th or 8th for a in-person meeting. Purpose is to discuss problems encountered during the "first priority" tasks that should be completed by this date. Secondly, to learn from the people in different areas of expertise about how to interact with their code (ex. John about DAO, Sebastian about server, etc). Finally, to code in teams of next set of priority issues.

TA Feedback Meeting on November 10 or November 11, after which we will hold our own meeting to discuss any changes that may need to take place, and to check the final phase of tasks that must be completed before the review meeting and the video making meeting.

Review meeting and Video making meeting within November 12 to November 14, dependant on when the majority of people can make it. May require multiple small meetings either in person or on Skype before a final large meeting in person. Complete interation_02.review.md and record the video. 

#### Artifacts

**TRELLO Board**
https://trello.com/b/9vpWgPMC/csc301
-> to keep track of whose working on which part
-> the state of each feature (working, testing, etc)
-> a checklist within each feature of things that have or have not been implemented
-> used to implement an agile development environment
-> discussing as a group which items are the most important in that they are needed by a large number of other features or items, or that they are core to the purpose of the app
-> assigning to team members firstly on a volunteer basis, but taking experience into account, and ensuring that we all have an even distribution of the workload
-> creating small deadlines by which the number one priority tasks must be done, and at that point choosing the number two priority tasks to be implemented next

**Slack**
https://csc301teamgroup.slack.com/
Email: 
Password: 
-> to talk to the teams responsible for different features separately
-> to hold group discussions with everyone (to arrange meetings, discuss TA remarks)
-> used to ensure all communication is facilitated in a public (within the group) environment, while organizing different topics in different places

**Doodle Polls**
-> determine the best times to facilitate in-person meetings
-> organized and structured, instead of a listing of availability in a group chat
-> ensures that "majority wins", whenever the most number of people are free is when these meetings will be held

## Product

### Goals and tasks

For this iteration, we chose the following features to implement, with an overarching goal to prioritize back-end functionality over front-end asethics:

**1) Add Entries To Journal**
	a. Entry Class
		i. Uploading Photo
		ii. Tagging Issues
		iii. Adding Products
		iv. Rate an entry
	b. Journal Class
		i. Adding Entries
	d. Front-end add entry view
	e. Make POST requests to database

Our application is a journal, and a journal without the ability to add entries is effectively useless. As a result, we're prioritizing the ability to add an entry to a journal for this iteration.

**2) Viewing Journal**
	a. Journal Class
		i. Store entries
	b. Front-end journal view
		i. Contains button to add an entry
	c. Make GET requests to database

Viewing the journal is important in much the same that adding an entry is important; the main purpose of the application is defeated without it. We want to be able to store entries but also view past entries to see progress. Furthermore, the ability to view the journal is the the first thing a continuing user will see when they log in to the app and so it is a priority in that regard as well.

**3) Server**
	a. Host on heroku
	b. Connect to java
	c. Connect to database JDBC

In order to implement ReactNative, a Java backend, and a postgres database, we need a central unit that acts as a means of communication. The server class is necessary for the interaction between all of our other goals for this iteration. 

**4) Database**
	a. Implement database schema
	b. Host database on heroku
	c. Connect database to jdbc server and spark server
	d. Populate the databse
	e. Write queries to interact with the database

Implemented in this iteration instead of using dummy data because the focus of our app is storing user information and photos, which is the purpose of the database

**5) Log in**
	a. Front-end View
	b. "Dummy" log in, not connected to database

The front-end view for logging in is an essential feature for the iteration because it is the "front page" of the application,  and thus will guide the design for the rest of the application. The aesthetics of our design should be systematic and we can base all future front-end decisions to the decisions made on this view.

### Artifacts:

**Front-end**
-> ReactNative for Android application
 - Add Entry View
 - Journal View
 - Log in View

**Back-end**
-> Java Code
- Entry Class
- Journal Class
- Product Class

**Database**
-> PostgressSQL
- Schema implemented
- ORM/DAO for each back end class

**Server**
-> Spark on Java
// @Sebastian: Expand on Later
