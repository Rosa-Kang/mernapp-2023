# Memories

![Memories](https://i.ibb.co/Z8Y0CJv/Screenshot-2020-10-30-at-11-10-04.png)

## Introduction
This is an Web Application Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called "Memories" and it is a simple social media app that allows users to post interesting events that happened in their lives.

The MERN stack consists of four main technologies: MongoDB, Express.js, React.js, and Node.js. MongoDB is a NoSQL database, Express.js is a web application framework for Node.js, React.js is a JavaScript library for building user interfaces, and Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.

Here are the general steps you'll need to follow to build a web app with the MERN stack:

Set up your development environment: First, you'll need to install the necessary tools and software for your operating system. You'll need a text editor or IDE (Integrated Development Environment) like Visual Studio Code or Atom, Node.js, and a package manager like npm (which comes with Node.js). You'll also need to set up a MongoDB database, which you can do either locally on your computer or using a cloud-based service like MongoDB Atlas.

Create a new Node.js project: Open up your terminal or command prompt and create a new directory for your project. Navigate into the new directory and run npm init to create a new Node.js project. Follow the prompts to set up your project, and make sure to specify the entry point as index.js.

Install the necessary dependencies: You'll need to install the following dependencies using npm install:

express: for creating a web server with Node.js
mongoose: for interacting with your MongoDB database
cors: for enabling cross-origin resource sharing
dotenv: for managing environment variables
nodemon: for automatically restarting your server when changes are made
react, react-dom, react-router-dom: for building the client-side of your web app with React.js
Create your server-side code: In your index.js file, import and configure the necessary modules for Express.js, Mongoose, and CORS. Set up your routes and start the server by listening on a specific port.

Create your client-side code: Create a new directory called client in your project directory. Inside the client directory, create a new React.js app using npx create-react-app .. This will create a new app with a basic directory structure.

Connect your client-side code to your server-side code: In your package.json file in the root of your project, add a new property called proxy with the value of your server-side URL (e.g. http://localhost:5000). This will allow your client-side code to make API requests to your server-side code.

Build your client-side code: In your terminal, navigate to the client directory and run npm run build. This will create a production-ready build of your client-side code.

Serve your web app: In your terminal, navigate back to the root directory of your project and run npm run start. This will start your server-side code using Nodemon. Open up your web browser and go to http://localhost:5000 (or whichever port you specified in your server-side code). You should see your web app running!

Of course, this is just a basic outline of the process for building a web app with the MERN stack. There are many other considerations and details that you'll need to take into account as you build your app. But hopefully this gives you a good starting point for getting started with MERN!
