const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGODB_URL, {});
      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (err) {
      console.log("Error: " + err);
   }
};

module.exports = connectDB;
