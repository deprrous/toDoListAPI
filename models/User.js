const mongoose = require("mongoose");
UserSchema = new mongoose.Schema({
   username: {
      type: String,
      required: [true, ""],
   },
   password: {
      type: String,
      minlength: 4,
      required: [true, "Enter the password!"],
   },
   email: {
      type: String,
      required: [true, "Enter the email"],
   },
   earnedPoints: {
      type: Number,
      defualt: 0,
   },
   role: {
      enum: ["member", "admin"],
      default: "member",
   },
});
