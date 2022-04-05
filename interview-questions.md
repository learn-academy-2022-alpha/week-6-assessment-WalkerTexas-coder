# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:

  Researched answer:
  "You would have to create a migration file using rails generate command. You would then open the migration file and add this line of code: 'add_column :students, :cohort_id, :integer'. Then you would run a 'db:migrate' command. This allows you to modify the database table of students adding a column for cohort_id of type integer. This would be your foreign key. You use cohort_id because it would be a foreign key to the cohort table. The foreign key would be on the student model." Dane

  "You would generate a migration called as such --> 'rails g migration add_column_foreign_key' and you would open the migration in your IDE and enter the following --> 'add_column :students, :cohort_id, :integer' once you've inputted those changes in the migration file, you will need to migrate via terminal to see the changes and can be verified through the schema. The name of the foreign key is 'cohort_id' and it will belong in the Student model. " Jose

  "In order to modify the contents of the database and add the foreign key , you can create a migration adding
the column and attributes needed. Once you have added the appropriate data you would migrate via the rails db:migrate command. The Cohort model will contain a primary key
while the foreign key will be added to the student model with a name student_id.


$ The following steps would be taken.
$ rails g migration add_foreign_key
$ rails db:migrate
$ add_column:animals, :animal_id, :integer
$ rails:db migrate" Jacob


2. Which RESTful routes must always be passed params? Why?

  Your answer:

  Researched answer: Show Edit Update Destroy

  "SHOW, EDIT, UPDATE, and DESTROY. RESTful routes need to be directly identified in order to have an action be taken on them. How can you delete something if you don’t know what you’re deleting?" Keelan

  "Show, Create, Edit, Update, and Destroy will be passed params. Show, Update, Edit, and Destroy will take params[:id] where it will allow the url routes to be dynamic. By passing in an id, it is taking the primary key of the data and passing it to the view. Where create will take on a private strong param, used to increase the security of the data sent through from creating. Strong params specify in the controller which parameters are used and accepted." Tiffany

  "The RESTful routes that must always be passed params are edit, update, destroy and show because those are calling on specific information in the database." Ryan



3. Name three rails generator commands. What is created by each?

  Your answer:

  Researched answer:
  
  "The 3 rails generator commands are: rails generate resource, rails generate model, and rails generate controller. The 'rails generate resource' command creates the Model and Controller for the application. The 'rails generate model' command is responsible for creating the Model for the application that contains the columns in the table along with the data type of each column. The 'rails generator controller' command creates the Controller in the rails application. I have had experience with using all 3 commands during my time creating different applications on Rails. " Jose


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
  "the controller method called here would be the index method. Index method would show the entire list of students"
action: "POST"   location: /students       
  "Create: in the database of Students"
action: "GET"    location: /students/new
  "New method: shows a form to input a new student in the DB"
action: "GET"    location: /students/2  
  "Show Method: will show the instance in the DB based on the id number"
action: "GET"    location: /students/2/edit    
  "Edit Method: shows a page that displays the edit form that allows you to update the instance with the id of 2"
action: "PATCH"  location: /students/2      
  "Update Method: Updates the second student in the DB"
action: "DELETE" location: /students/2      
  "Destroy Method: deletes the second student in the Database. The primary key will never be used again. "


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

"1. As a user, I can see all the tasks listed on the home page of the application.
2. As a user, I can click on a task on the home page and be routed to a page where I can see the completion status of the task that I have selected.
3. As a user, I can navigate from the show page back to the home page.
4. As a user, I can click a button that will take me from the home page to a page where I can add a new task to the list.
5. As a user, I see a form where I can create a new task to add to the list.
6. As a user, I can click a button that will submit my new task to the database.
7. As a user, when I submit a new task, I am redirected to the home page.
8. As a user, I can delete a task from the to-do list.
9. As a user, I can update the completion status of a task on the to-do list.
10. As a user, I can update the title of the task on the to-do list." -Athen

"Story 1: As a developer, I can create a List model in the database. A list will have the following information: name, description, date that it is due, and whether the task is complete or incomplete. Story 2: As a user, I can see all the tasks in the database. - Make a few tasks in rails console. Story 3: As a user, I can update a task in the database. Story 4, As a user, I can see a form to create a new task. Story 5: As a user, I can create a task in the database. Story 6: As a user, I can click a button that will submit my new task to the database. Story 7: As a user, when I submit a task, I am redirected to the home page. Story 8: As a user, I can destroy a task in the database and there will be a button for me to delete the dask and it sends to database. Story 9: As a user, I can see all the task listed on the home page of the application. Story 10: As a user, I can click on the name of the task and be routed to a page where I can see the name, description, the due date, and whether it's completed/incompleted. Story 11: As a user, I can navigate from each page back to the home page of the application." -Tiffany