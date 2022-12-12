# CodeChallenge #

## Flatiron Movie Ticket App
### Table of Content
   1. Intro
   2. Requirements
   3. Project Setup
   4. Installations
   5. Project Guidlines


   ### Intro
-For this assessment, you'll be working on Flatdango.

Flatiron Movie Theater is open for business! You will be building out an
application, Flatdango, that allows a user to purchase movie tickets from the
theater.

 ### Requirements
 - Having a well written README file (like this one)
 - Fetch data from local server running JSON DB server

### Installations
 - First begin by setting up the neccesary files in your VS Code after git clonning it onto your local area.(files the likes of index.js, index.html and maybe a style.css)
 - set up your json server by running : json-server --watch db.json ensure it is running by entering the second link
 
### Project Setup 
- Create a new project folder.
- Create a new GitHub repository (NB: ENSURE IT IS PUBLIC)
- Add your TM as a contributor to the project.
 - If you want to see different movies and there details click on the movies displayed on the menu and the display changes(This only works when the JSON server is running)
 - If you want to buy your ticket click the button at the bottom of the page
 - Refresh when buying another ticket   

 ### Project Guidelines 
 Core Deliverables
As a user, I can:

1. See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`. You will need to make a GET
   request to the following endpoint to retrieve the film data

2. See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads. (_optional_: you can style each film in the list
   by adding the classes `film item` to each `li` element.) There is a
   placeholder `li` in the `ul#films` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list. You
   will need to make a GET request to the following endpoint to retrieve the
   film data:

3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available). **No persistence is needed for this feature**.   
   