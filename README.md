# Cinema-App
Cinema SPA | Technical University of Varna | Exam

## Project description

  Cinema booking system, made for university's exam.
Single page application.
I am using custom router, templating library - lit-html, firebase as BaaS.
The design is made and implemented by me. It's responsive and dekstop-first.

## Project functionality
 
  ####  Main: 
   1. Easy ticket booking, with view to the cinema hall and reserved seats.

   2. You can see catalog with all movies for the day and their stream hours.

   3. You can see top 3 watched movies.

   4. You can register, log in and logout.
   
   5. Notifications on success or error.

  ####  Additional: 
   1. If you are not logged in when you try to buy tickets you are redirected to login page.
   2. No state is pushed if you click on link with same href.
   3. If your entry point is with wrong url, you are redirected to home page.

  ####  Disdisadvantages:
   1. If you try to login when i have turned of Firebase authentication you will receive error "Failed to fetch", due to security reasons in Firebase. And after the second time    you try, or 1-3s it will be turned on automatically and you will be able to log in. It is same for register.

 
## How to set up:
1. Open terminal in client and server folder and type npm install

2. Type npm start in client and server folder.

## Tech stack:
HTML5, CSS3, Javascript, Lit-html, Firebase

