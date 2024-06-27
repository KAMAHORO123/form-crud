const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/crud", {
      useNewUrlParser: true, // Optional. Mongoose will use the new url parser automatically
      useUnifiedTopology: true, // Optional. Mongoose will use the new topology engine
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDb;
