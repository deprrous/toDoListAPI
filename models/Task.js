const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
   title: {
      type: String,
      required: [true, "must enter task title"],
   },
   description: {
      type: String,
      required: [true, "you must enter task description"],
   },
   dueDate: {
      type: Date,
   },
   completed: {
      type: Boolean,
      default: false,
   },
   priority: {
      enum: ["low", "medium", "high", "urgent"],
   },
   point: {
      type: Number,
      required: [true, "Enter the point of task!"],
   },
   owner: {
      type: mongoose.Schema.ObjectId,
      required: [false],
   },
});
