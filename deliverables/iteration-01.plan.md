# Sk.in

## Iteration 01

 * Start date: October 16
 * End date: October 21

## Process

During our iteration meeting, we discovered that our understanding of the core functionality was vague and even that we disagreed in some regards about the absolute overarching purpose of our application. After a presentation in tutorial, we were forced to pivot to a more user-focused application instead of the original idea that focused on a dermatologist-patient relationship. So in another planning meeting, the following document was created. To see our initial notes during the first planning meeting, the following link will direct you there.

https://docs.google.com/document/d/12QYf4JHgPzTjwSkGZWYaGA8PKmZdM39cghKgrL6sXMY/edit

#### Roles & responsibilities

Areas of Development

1) Front-end android
-> Copy Editing (Writing, Proof-reading)
-> UX design (translation from mockup)
-> Implementing back end functionality

2) Back-end Java
-> Implement CRC cards
-> Ensure persistence
-> Log-in functionality
-> User profile
-> Reviewing system
-> Notification system
-> Create and edit journal entries
-> Recommendation algorithm
-> Analytics demonstration

3) Server and Database
-> Server interacts with database and sends data to the back-end
-> Create database and create queries for populating and modifying it
-> Provide the analytics information to the back-end
-> Ensure that the server can be connected to by the back-end but that it is secure

4) Research
-> Types of Prevalent Skin-Care problems
-> Common solutions, recommendations
-> Surveys/Feedback

5) QA
-> We will each test another person's code to ensure that all cases have been accounted for

#### Events

Please describe the meetings you are planning to have:
We plan to meet on every Monday prior to the evening class in person for at least one hour as a status update and clarification meeting. Further online meetings will be arranged when roadblocks are encountered or pivots are required. Our final review meeting has been planned for Oct 21. And finally, our last meeting before the due date will be Oct 25.

We will keep constant communication through Facebook Messenger and updating our tasks using Trello to have an overview look on how the 
team is performing as a whole.

 * What's the purpose of each meeting?
The weekly meetings before tutorial will be to update and review one another about our progress or any new problems that anyone might have encountered.
Any skype meeting we have will be more of an immediate/emergency situation, perhaps after an office hour with our TA Adam in which he provided important criticisms.
And our final review meeting will be when everyone is done their artifacts to discuss the process.


#### Artifacts

1) Trello/Slack -> Nikita

Can be found at

We used trello to maintain a list of features to be implemented (sorted by priority), working, tested and completed. This helped us to be organized. It also helped everyone to be updated on the various tasks assigned to the team. It made implementing agile much easier and smoother. We plan to continue using trello to aid our agile development throughout the project.


2) Mockup and InVision -> Anisha

Can be found under artifacts -> "Mockup Sketches.PDF" and at https://projects.invisionapp.com/share/M3921JPWB#/screens.

The mockup should be an on paper design of most of the pages we will be creating on the Android front-end development. Rather than focusing on the colours or the visual niceties, the mockup is for the definition of the features, indicating the floor plan for how users can interact with the application and the paths they can take to use the different features. Using InVision to take the on paper designs and upload them online, then using features that allow linking buttons to different screens to provide a basic run through of the app. If confused about where to click on the screen, please take a look at the comments section of that screen.


3) CRC Cards -> Sara

Can be found under artifacts -> "CRC.pdf".

In total, there are six classes that we will need in our back end design.
First we need to have a User class which is responsible for user's login and profile operations like changing the password and editing the profile, creating or deleting a journal, adding products and listing user's products and issues. The user can also view the history of issues and see which issues were solved or not.
Second, we need a Journal class. A journal contains a list of entries and is responsible for operations that can be done on entries like searching, comparing, adding or deleting an entry or sorting and grouping entries based on a specific issue or product. Other than this, the user can also decorate or customize his/her journal.
Entry is basically a page in the journal. It contains a picture, a description (which can be audio, video or text), the issue that is related to that picture and the product that was used at the time the picture was taken. Based on these properties, an Entry class is responsible for attaching and editing a picture, adding descriptions, tagging an issue or a product and adding a rating for that entry.
The Product class is responsible for everything about a specific product. In other words it is responsible for: reviewing the product, rating the product, comparing another product to that specific product, getting feedback and other people's opinions about the product, and viewing the progress of using that product.
The Issue class includes the start and end date of that issue and is responsible for adding products that are used for that issue and viewing the progress of it.
The Server class basically gets and sends data back and forth between different users and itself and does some operations on the data to give feedback to the user.


4) Database Schema -> Shannon

Can be found under artifacts -> "Database_Schema.png" and "database_plan.txt"

We decided to use a relational database to store all user data for our mobile app. We generated the schema using www.app.genmymodel.com. The user table is used for storing all user login information. The product table is a table of products that any user can access as it stores all the different products that users have ever reviewed or added to their list of products. ProductReview stores all reviews on any particular product by any user. MyProduct are specific products users have added to their product list. For the user’s journal, there is the Entry table to store all the entries, Photo table to store all the photos used for any entries, and ProductUsed for products used during an entry. As for issues, we have a global table to store all issues. Users can reference those issues in the IssueRating where they rate any issues they have tagged in an entry.


5) User Personas -> Sebastian

User Personas: In the following link you can find the user personas that we will have in mind when building our product
https://app.xtensio.com/folio/5mrkn2li

The process of creating user personas was very important for us since it helped us focus more our user group. Before creating this personas, we were deciding if we wanted to focus more on dermatologists as our end user or we wanted to make an app for the people that suffer skin conditions. After creating this artifacts, it  became clear to us that the problem that normal people have right now is a bigger problem for them and we can create a product that solves it. 

6) Survey -> Nikita

For explanation of the survey results, please see "surveys.docx" under artifacts.
The survey itself can be found at https://www.surveymonkey.com/r/D59ZZJX.

7) Preliminary MockUp using PopApp -> John

Our very first UX prototype was rapidly done using PopApp, after seeing the tools suggested in lecture. A much more detailed write-up can be found in popAppArtifact.txt. The prototype is here:  
https://popapp.in/w/projects/5803365a481a103c5bac88f8/preview/5803b93fab6d4d3514aa66e7


## Product

Goals and tasks
Numbers are goals, letters indicate tasks to complete the goal

(1). Demonstrate a clear and concise core feature list for our application

a.	Break down the application feature list by prioritizing functionality decisions

b.	Decide which features to keep and which are beyond the scope of the assignment

c.	Describe the purpose of each feature to the end-user


(2).	Display all on-paper and high-level planning.

a.	Anything that does not involve coding but rather involves design and schema should have been thought out and demonstrated in some way.

b.	Make sure to have at least one artifact for every area of development listed above


(3).	Make all major decisions related to design and schemas as a group

a.	Regularly meet up in order to discuss the application

b.	Confer with others when making decisions on our roles

c.	Decide which languages will be used

(4).	Create an organized and structured way of meeting and planning and keeping track of work done.

a.	Use a scrum organization software

b.	Decide on a form of online communication and use that in order to ask questions and arrange meetings

c.	Consistently use a polling system to find out when people are available
