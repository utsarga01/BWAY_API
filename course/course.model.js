import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
    trim: true,
    maxLength: 10,
  },
  tutorName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
});

const Course = mongoose.model("Course", courseSchema);


export default Course;
