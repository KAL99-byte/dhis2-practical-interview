# DESIGN DECISIONS

(1)State Management with React Hooks:
The application uses React hooks (specifically, useState) for state management.Location state holds the user input, weatherData stores the API response, loading tracks the API request status, and error holds any error messages.

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





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
