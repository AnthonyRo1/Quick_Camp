# Quick_Camp
## Welcome to Quick_Camp, a clone of www.hipcamp.com!

Below are the feature lists that I chose to primarily focus on for this project. 


### Backend API Routes 
I decided to make use of separating each individual feature that I chose by building out full CRUD functionalities for them. 
The main features that I took inspiration from HipCamp and implemented were: 
 * Campsites (Posts)
 * Bookings (Booking a stay/scheduling)
 * Reviews (Comments)

The backend routes that I chose to create for the above mentioned functionalites are shown below: 

 
 ## Campsites API  
The [campsites] API allows a logged in user to receive/update campsite data
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

 The backend routes shown above were created with a database structure in mind which I show as well: 
 
 
