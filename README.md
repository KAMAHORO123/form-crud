# form-crud
This is a full-stack application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application provides functionality for creating, viewing, editing, and deleting forms.

Features
Home Page: Welcome page of the application.
Form Page: Page to submit new forms.
View Page: Page to view all submitted forms.
Edit Page: Page to edit a selected form.
Prerequisites
Node.js and npm installed
MongoDB installed and running
Installation
Backend
Navigate to the backend directory:
sh
Copy code
cd backend
Install the dependencies:
sh
Copy code
npm install
Start the backend server:
sh
Copy code
npm start
Frontend
Navigate to the frontend directory:
sh
Copy code
cd frontend
Install the dependencies:
sh
Copy code
npm install
Start the frontend server:
sh
Copy code
npm start
File Structure
sh
Copy code
/your-project
  /backend
    /models
      formModel.js
    /routes
      formRoutes.js
    server.js
  /frontend
    /src
      /components
        Edit.jsx
        Form.jsx
        Home.jsx
        View.jsx
      App.jsx
      index.js
    package.json
  package.json
  README.md
Backend
server.js: The main entry point for the backend server, sets up Express.js server, connects to MongoDB, and defines routes.
models/formModel.js: Defines the Mongoose schema and model for a form.
routes/formRoutes.js: Defines the API endpoints for creating, reading, updating, and deleting forms.
Frontend
App.jsx: Main React component that sets up routing using React Router.
index.js: Entry point for the React application, renders the App component.
components/Home.jsx: Component for the Home page.
components/Form.jsx: Component for the Form submission page.
components/View.jsx: Component for viewing all submitted forms.
components/Edit.jsx: Component for editing a selected form.
View.css: Styles for the View component.
Edit.css: Styles for the Edit component.
Running the Application
Make sure MongoDB is running.
Start the backend server:
sh
Copy code
cd backend
npm start
Start the frontend server:
sh
Copy code
cd frontend
npm run dev
Open your browser and navigate to http://localhost:5174/ to see the application running.
Usage
Home Page: Welcome to the application.
Form Page: Navigate to /form to submit a new form.
View Page: Navigate to /view to see all submitted forms.
Edit Page: Click the "Edit" button on a form in the View page to navigate to /edit/:id and edit the form details.
Conclusion
This application demonstrates a simple implementation of a CRUD application using the MERN stack. It covers the basics of setting up a full-stack application with React for the frontend and Express.js, MongoDB for the backend.
