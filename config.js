const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes.js");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL);
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
    bookRoutes.seedDatabase();
  });
  mongoose.connection.on("error", (err) => {
    console.log(`error connecting to MongoDb: ${err.message}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
  });
};

module.exports = connectDB;
