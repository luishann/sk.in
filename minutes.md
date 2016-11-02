
## Final Submission Meeting And Initial Planning Meeting October 26

Secratary: Anisha
Trello: Nikita

Refining the file structure of the github account and proof-reading/editing all the deliverables.

Planned List of All Features:
- Log in
- Sign up
- Adding an entry
- Modify/Delete entry
- View all entries
- Search Products
- Review Products
- Analytics (Tracking Progress)
- Product List (Add, Delete)
- Tagging System for Issues (Displaying them)
- Systems (database, server)

First Iteration:

1) Adding an entry
- uploading an photo
- rating system
- text descriptions
- define a product (drop down list)
- write tags
- storing all of this in database
- create an Entry class and all required methods

2) Modify/Delete Entry

3) Create the datebase
- implement schema using postgresSQL
- host database on heroku
- connect to jdcb

4) Create the server
- implement on spark
- host on heroku
- connect to the backend java and to the database

5) Log in

6) Sign up

7) TESTING
- Each other's work

Database Schema:

- Discussed whether we want people to create several entries for one day or one entry a day that covers several products and issues
- Both sides involve different focuses and different logic for the database schema
- Decided that users will create one entry a day, covering several products and several issues, and will be able to rate each product individually but not each issue. There will also be a rating for their overall face.
- Also decided that when a user creates a product they must specify issues relating to that product at that moment, and so when they choose the products of the day, the issues will be auto generated
- Modified the database schema within iteration2 folder to reflect these changes in decisions
- Decided that users should be able to close issues at any point
- startDate for MyIssue refers to the first time they add a product for that issue
- endDate for MyIssue refers to them choosing to close an issue

TO DO:

+ Nikita
-> Do Trello and Github configuration

+ Everyone
-> Skype meeting at 10:30pm
-> Looked at revised database schema and the decisions listed above

## Meeting October 27
Secretary: Sebastian Alvarado
Database Decisions
+ We decided that we will tag issues to entries and not products. So the user can be able to make a new entry they may or may not tag an issue to the product they are using that day. 
+ Rating System:
  The rating system will be star-based and the user can tell how he/she feels in a given day. 
+ We are redefining the database schema that is located in iteration2 folder
+ In the Trello Board we are assigning tasks for each person depending on Features not part of the system as a whole. 
+ We have decided that in the Product class we will add ratings for each product. 
+ Entry class needs to have its own description that will be measurable. 
+ Sebastian will create a sample server in Spark hosted on heroku. This server should have sample API calls to the java backend.
+ All tasks have been assigned to each person evenly and we plan to start testing in 5 days when we have implemented it. 
+ Implementing Slack channels in order to make our communications smoother as we develop the system and we will need different layers.
+ The SCRUM master for this week will be Sebastian. 

## Major Review Meeting October 25

Secratary: Anisha Rohra

Worked on a google docs collectively in order to develop our ideas as a group.
+ Radhika will edit and submit the Review portion of the review.md file.
+ Sebastian will edit and submit the Reflection portion of the review.md file.
+ Anisha will go through and edit/proof-read/make relevant changes to product.md and plan.md
+ Everyone will submit paragraphs on various artifacts that they worked on in order to describe the important and relevance of their products.
+ The issues that a particular user is facing will be saved in the User class.


## Major Planning Meeting October 16
We all contributed to a google doc of our deliverable '#2, the planning meeting doc

https://drive.google.com/open?id=12QYf4JHgPzTjwSkGZWYaGA8PKmZdM39cghKgrL6sXMY
We have also decided to use Trello as our SCRUM artifact in order to keeo our development team organized.
Our Trello board can be found at:
https://trello.com/b/9vpWgPMC/csc301

## Meeting October 3

Secretary: John Chen

+ Sebastian ideas:
When you go to a new doctor, you need to repeat same information a lot
App that helps you keep track of your medical data
We would need to establish a standard
Would also be a good idea for ER 
  - Adam’s response:
Huge idea in scope
--might be better to refine it for specific users and why they would use it
Why are these users going to adopt what we’re designing? USER VALIDATION!
+ Nikita:
class on time app
Personal scheduler/assistant app
Specific group: lazy students
NOT a suggestion app, just really about keeping track of time, taking breaks etc.
We need to make it more 
+ Shannon: skin care app, take pictures of your face everyday and see if it works
Also helps with girls when they switch them and then get pimples keep them get track of

+ John: Randomized local kickstarter idea, where you can only fund projects within a two kilometer radius of where you live

+ Sarah:
copy lots of different stuff from different iteams
copy all highlighted stuff from a doc to another doc

+ Sebastian: topCoder like craigslist for tech jobs
Instead of topCoder, we have a pro-bono/low-cost topCoder for students and charities
freecodecamp, online courses for development

+ John 2: Problem: developers not knowing what to hack/develop
Solution: Emphatically NOT Tinder! 
But location based app, we vet the users by a competitive application process etc.

For next meeting: everyone pick an idea they like and do some research on it. We will conduct the vote next time!
