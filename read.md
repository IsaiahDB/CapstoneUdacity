# Travel Ticket App Udacity Capstone

## Application Description

This applications allows users to see the weather of thie next vacation spot.

This application uses three API's to get the location, weather, and a picture of their vacation spot.

The API's are 

Geonames API, Weatherbit API using the Forecast API, and Pixabay API

## Functions Used In Application

* API's function calls
 * firstApi() calls the geonames API and send data to the secAPI() functions and vacationData[]
 * secApi() calls the weatherbit API and send data to the thridAPI() functions and vacationData[]
 * thirdApi() calls the pixabay API and returns vacationData[]

* checkData function
 * Check to see if the date is not more than 7 days

* pdfConverter function
 * create a pdf document of the destination data

* updateUI function
 * update HTML with location and weather data






