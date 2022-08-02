# Quick_Camp
## Welcome to Quick_Camp, a clone of www.hipcamp.com!
***
If you'd like to see this project, you can visit https://quick-camp.herokuapp.com/


This application was build using React/Redux, and Express. 
***

Below are the feature lists that I chose to primarily focus on for this project. 
***
## 1. User Creation 
 * Logged in Users should be able to sign up, log in, and sign out. 
 * Logged in Users should be able to demo the website without having to create an account. 
 * Logged in Users should be able to visit other pages, refresh the page, and view content dynamically while remaining logged in via authentication. 
 * Logged in Users should be directed to the main content on the website after logging in. 
## 2. Spots 
 * Logged in Users who have the ability to host spots can POST spots available for stay. 
 * Logged in Users can view (GET) all of the spots available for stay upon logging in. 
 * Logged in Users who have posted spots available for stay can UPDATE their posts. 
 * Logged in Users who have posted spots available for stay can DELETE their posts as long as any bookings are not currently in place. 
## 3. Bookings 
 * Logged in users can book a stay at a chosen spot by submitting a form (POST).
 * Logged in users can UPDATE their booking if they chosen time frame changes. 
 * Logged in users can GET all of the booking information by navigating to current bookings. 
 * Logged in users can DELETE current bookings within a timeframe. 
## 4. Reviews 
 * Logged in users can create a review for a spot that they have stayed at. 
 * Logged in users can edit posted reviews.
 * Logged in users can delete posted reviews. 
***
### Backend API Routes 
I decided to make use of separating each individual feature that I chose by building out full CRUD functionalities for them. 
The main features that I took inspiration from HipCamp and implemented were: 
 * Campsites (Posts)
 * Bookings (Booking a stay/scheduling)
 * Reviews (Comments)

The backend routes that I chose to create for the above mentioned functionalites are shown below: 

*** 
 ## Campsites API  
The campsites API allows a logged in user to receive/update campsite data
* A logged in user can view all campsites. 
 * `GET /api/campsites`
* Users who also host campsites (and are logged in) should be able to host a new campsite to be available for stay.
 * `POST /api/campsites`
* A user who owns a campsite can update or delete posts. 
 * `PUT /api/campsites`
 * `DELETE /api/campsites`


## Bookings API
* A logged in user should have access to all bookings 
 * `GET /api/bookings`
* A logged in user should be able to create a booking 
 * `POST /api/bookings`
 * `DELETE /api/bookings/:bookingId`
 * `PUT /api/bookings/:bookingId`


## Reviews API 
* A logged in user should be able to view all reviews for a spot. 
 * `GET /api/reviews` 
* A logged in user should be able to create a review on  spot 
 * `POST /api/reviews` 
* A logged in user who owns/created a review should be able to edit, update, or delete a review.
 * `DELETE /api/reviews/:reviewId`
 * `PUT /api/reviews/:reviewId`

***
The backend routes shown above were created with a database structure in mind which I show below. 
I centered my Database around building this application with React, so each 'Campsite' would contain 
data from the other Models: Bookings, Reviews, and of course, Users. Ultimately Each Campsite was the primary
visual focus of this project, so allowing this component to load others was a useful choice.


Database Schema: 

***
![Schema-Backend](https://user-images.githubusercontent.com/59547636/172113199-59841f18-9da7-4436-9e51-8ac3ab7802f4.JPG)
***
 
 List of React Components and General Structure
 
 - LoginForm
 - Signup Form
 - Start Hosting Form (create new campsite immediately)
 - Navbar
 - Main 
 -  - Main Form 
 -  - Campsite Card 
 -  - 
 - Campsite (single campsite)
 -  - Booking (form within campsite)
 -  - Reviews 
 -  - Edit Campsite Form 
 -  Create Campsite 


Difficulties and Challanges:

The difficulties and challenges that I faces the most and were also most unexpected would be the meticulous nature of CSS/HTML. Most of the bugs that I came across with JavaScript and React were syntax based.

In the future, I would like to be more knowledgable on how to use application wide context for smaller applications such as this one. I challenged myself to use redux in order to better grasp the complexities of larger applications. I learned most from creating reducers, especially about the nature of objects and the ability to cut down on iteration time with objects. 

I would like to add more to this project such as a tighter component structure, as well as a different approach to the database that I currently have. I will continue to work on this project as I learn. 

