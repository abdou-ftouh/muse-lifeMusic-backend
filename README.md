# Local Music App

Davidson Fong & Abdul El Ftouh



#### Project Idea
On load, users will be able to view local live music events in their area, including data points like featured band, location, time, etc. These events will appear on a Google Map based on proximity(default) but can be filtered by band, by date/time, by venue.
There will be two types of users: Providers and Endusers

The bands and venues are the Providers. Via form, we will collect their information, including calendar ID. This calendar data point will be our way of collecting event data. They will have to make an account and have full CRUDability on account details. Their events will update automatically based on the updates they make on their calendar
The Endusers are the every day people who use the app. Default: they’ll be able to view bands and have filtering capabilities. They’ll be able to like bands. This will be the social media aspect of the app and will drive traffic. The Endusers with profiles will be able to add custom settings such as favorite bands [ ], favorite venues [ ], favorite dates/times [ ]. They will get notifications based on their custom settings.

#### Technologies Used

- Node.js
- Mongoose
- Express
- MongoDb
- Jwt

---
### List of models and their properties

- Band Model
- User Model



### MVP Goals
- Add Likes
- Authentification / Authorization
- Google Api
- Fill in Band information 
- Admin page where you are able to use CRUD Full.
- Filter Options	
    - Band
    - Venue/ location
    - Date/ time
    - Proximity (default)


---
