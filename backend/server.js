const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDb = require("./config/db");
const formRoutes = require("./routes/form"); // Import form routes

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// Connect to MongoDB
connectDb()
  .then(() => {
    console.log("MongoDB connected");
    
    // Routes
    app.use("/api/forms", formRoutes); // Mount formRoutes for handling form submissions

    const PORT = 4000; // Use process.env.PORT or default to 4000
    app.listen(PORT, () => {
      console.log(`🚀 Server started running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
