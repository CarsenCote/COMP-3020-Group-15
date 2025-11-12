# COMP-3020-Group-15
The git repository for the final project of COMP-3020-Group-15

## Task Management
Tasks for us to work on are divided into major "milestones", with each different page being its own milestone. Anybody can create a new task and add a description, which should include expected functionality or major elements for us to add to a page. 

Tasks will be "first come first serve"; anybody can throw their name on a task to show they intend to complete it.

## Pull Requests
PRs will be reviewed by at least one other group member before merging into the main branch. This is to reduce the risk of merge conflicts and ensure our code is being properly tested and that a PR has accomplished what it set out to (i.e. fulfilled a specific task requirement). 

## Documentation
Our code is split into a few main parts so far:
### 1. HTML
Our HTML is set up in "templates". Each template that begins with the script tag (see image below)

 <img width="872" height="622" alt="image" src="https://github.com/user-attachments/assets/62c3f1dd-c04e-4eb9-9b73-9d9d93fe4376" />

is a separate "page"; so for example, in our code we have a template script for the signin page, the categories page, the club select page, the user dashboard, and so on. We use these scripts to dynamically inject HTML into the main body of our document - so the HTML that's actually being rendered to a user's screen is dependent on what script we've decided to inject into it!

These scripted templates are also used for other dynamically changing content *within* a page. A good example of this is when we render the clubs within a category (code shown below):

<img width="819" height="425" alt="image" src="https://github.com/user-attachments/assets/6304cc85-6f86-404a-a73e-59a9426dd8e0" />

This second template (under the screen template) is used for *each club within that category* - so for every club we're rendering, we use this script to inject the name and description into the HTML, until we've gone through and found every club we need to render. This is done using Javascript and jquery - which leads us to the next major part of our code!

### 2. Javascript and jquery
Before we get to this, I'd suggest reading up on how Javascript and jquery work to dynamically change HTML page content - especially jquery if you're unfamiliar with it. But assuming you know a little about how these work, I'll get to examples of how we're using it in our code!

Javascript and jquery are used together in the javascript files for our project - most heavily in main.js and template.js. The main.js file is where we manage the global state of our web application. Carsen figured out most of this code so he may want to fill in here with more detail, but the two most important things to note here are 1) how we change between templates and 2) how we manage the state of our app.
To change between templates, we pass the templateID (e.g. '#signin-template') to the **changeNextTemplate** function - which then calls the other 'changeTemplate' functions accordingly depending on where we are in the app (i.e. if you're navigating from the signin screen to the explore screen, we don't need to save the previous template, as we don't want the user to be able to go all the way back to the signin screen by hitting the back button). When it comes to state management of our app, the things we want to be able to access from anywhere - lists of all categories, clubs, the user's information, etc. - are stored in the App State in main.js.

//TODO: templates.js explainer

### 3. CSS stylesheets

