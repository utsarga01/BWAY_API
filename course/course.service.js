import mongoose from "mongoose";
import Course from "./course.model.js";
import Yup from Yup;



export const validateMongoIdFromParams = (req, res, next) => {
  //extract course id from req.params
  const id = req.params.id;

  //check from mongo validity
  const isValidId = mongoose.isValidObjectId(id);

  //if not valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid mongo id" });
  }
  next();
};
  export const deleteCourse = async (req, res) => {
    //extract course id from req.params
    const courseId = req.params.id;

    //find course
    const requiredCourse = await Course.findById(courseId);

    //if not the course, throw error
    if (!requiredCourse) {
      return res.status(404).send({ message: "Course does not exist" });
    }
    //delete course
    await Course.findByIdAndDelete(courseId);
    return res
      .status(200)
      .send({ message: "Course is deleted successfully..." });
  };
