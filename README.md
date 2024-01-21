# Chikitsa Salah Readme
Chikitsa Salah is an integrated healthcare platform that offers a range of essential services, such as appointment booking, advisory services, and chatbot support.

## Features
Appointment Booking
Chikitsa Salah simplifies the process of finding and booking appointments with qualified doctors and specialists. You can search for doctors based on location, specialty, and availability. Once you've selected a doctor, you can book an appointment directly through the app.

## Advisory
Chikitsa Salah provides various advisory services, including health tips, articles, and videos. Additionally, you can receive personalized advice from doctors and other healthcare professionals through the app.

## Chatbot Support
Chikitsa Salah's chatbot offers 24/7 support for various health concerns. The chatbot can answer your questions, offer advice, and facilitate connections with a doctor if necessary.

## Benefits
Chikitsa Salah offers several benefits to users:

### Convenience
Chikitsa Salah serves as a single platform for all your healthcare needs. You can book appointments, receive advice, and chat with a doctor, all in one place.

### Affordability
Chikitsa Salah's services are designed to be affordable and accessible to everyone.

### Quality
 Chikitsa Salah collaborates with qualified doctors and healthcare professionals to deliver high-quality services.

## Conclusion
Chikitsa Salah is a comprehensive healthcare platform that offers a range of essential services, including appointment booking, advisory services, and chatbot support. It prioritizes convenience, affordability, and high-quality services. Download the Chikitsa Salah app today and take control of your health!

# Declaration of Authorship
The Application is a Next JS 14 application which uses the following third party libraries and services:
- [ShadCN/UI] for Buttons (later modified to suit the colour pallete)
- [Slider-JS] for the Slider
- [Google-Palm-2] API for generative AI embedded within Chatbot

The Application is developed by the following team members(Team `Try N' Test`):
- `Dipesh Ranjan`
- `Isheta Aggarwal`
- `Rajat Srivastava`
- `Kislay Gupta`

### Note
Some Components might seem similar to the ones in the previous projects, but they are not even remotely same. e.g. - contact section (previous project's contact uses zod with tailwind, while this is plain html form)

### How to run the project

- Clone the repository
- Run `npm install` to install all the dependencies
- Run `npm run dev` to start the development server
- Run `npm run build` to build the project
- Run `npm run start` to start the production server

## Backend

## Prerequisites

Before running the project, make sure you have the following prerequisites installed:

- Node.js
- MongoDB
- npm (Node Package Manager)

## Getting Started

1. ```bash
    cd backend

2. Install project dependencies:

   ```bash
   npm install

3. Create a ```.env``` file in the project's root directory and add the following environment variables:
   - `MONGO_URI`=YOUR_MONGODB_URI
   - `API_KEY`=YOUR_GOOGLE_TEXT_SERVICE_API_KEY

## Running the Application
* Start the server: ```npm start```

* The server will start running on http://localhost:8000.


## Project Structure
The project is organized into various files and directories:

* ```index.js```: The main server file that sets up the Express server, establishes a database connection, and defines routes.

* ```dbConnection.js```: A module for connecting to the MongoDB database.

* ```chatApi.js```: A route for interacting with a chatbot for medical advice.

* ```getDoctors.js```: A route for fetching all available doctors.

* ```doctor_modal.js```: A Mongoose model defining the structure of a doctor's document in the database.

* ```recommendedDoctors.js```: A route for finding doctors based on user input related to health issues.

## Usage 

### Chat 

- **Endpoint**: ```/chat```
- **Method**: POST
- **Description**: Send a POST request with a ```question``` parameter to get a medical response.

### Getting all doctors

- **Endpoint**: ```/getDoctors```
- **Method**: GET
- **Description**: Send a GET request to get all the doctors available.

### Getting recommended doctors

- **Endpoint**: ```/recommendedDoctors```
- **Method**: POST
- **Description**: Send a POST request with a ```paragraph``` parameter to get recommended doctors related to that health issue described in the paragraph.
