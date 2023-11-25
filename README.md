# DESIGN DECISIONS

(1)State Management with React Hooks:
The application uses React hooks (specifically, useState) for state management.
location state holds the user input, weatherData stores the API response, loading tracks the API request status, and error holds any error messages.

(2)Asynchronous API Request with fetch:
The fetchWeatherData function is marked as async to allow the use of await for asynchronous API calls using the fetch function.
The API request is constructed using the OpenWeatherMap API URL with the city name, API key, and unit of measurement parameters.
The try-catch block is used to handle both successful responses and errors. 
If the response is not successful (HTTP status is not in the 200 range), an error is thrown.

(3)Error Handling:
If an error occurs during the API request (e.g., city not found), the error message is caught, and the error state is set. 
This information is then displayed to the user in the UI.
The error message is displayed in a visually distinct manner, using a red color for better visibility.

(4)User Experience:
The user interface is designed with simplicity in mind. There's a clear input field for the user to enter the city, a button to trigger the weather request, and a section to display the weather details.
The button is disabled during the API request to prevent multiple simultaneous requests and give feedback to the user that something is happening.
Loading feedback (Loading...) is displayed while waiting for the API response.

(5)Visual Styling with CSS:
A basic CSS file (WeatherApp.css) is included to provide some styling to the application, making it more visually appealing.
The styles are kept minimal to serve as a starting point. Further styling can be added based on the desired look and feel.

(6)Temperature Units:
The API request includes the units=metric parameter, which requests temperature data in Celsius. 
You can modify this based on your preferences or allow users to choose their preferred units.

(7)API Key Security:
The API key is hardcoded in the client-side code. In a production environment, it's crucial to keep API keys secure.
For web applications, consider using a server to make API requests securely, keeping the API key on the server side.

(8)Modularity and Component-Based Structure:
The application is structured into components (e.g., WeatherApp.js and WeatherApp.css) to promote modularity and maintainability.


