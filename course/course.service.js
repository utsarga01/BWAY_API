import mongoose from "mongoose";
import Course from "./course.model.js";
import Yup from "yup";



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
  export const validateSchema = async (req, res, next) => {
    const courseValidationSchema = Yup.object({
      name: Yup.string()
        .required("Name is required.")
        .trim()
        .max(30, "Name must be at most 15 characters."),
      duration: Yup.string().required().trim().max(10),
      tutorName: Yup.string().trim().required().max(30),
      price: Yup.string().required().trim(),
    });

    try {
      const validatedData = await courseValidationSchema.validate(req.body);
      req.body = validatedData;
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }

    next();
  };
  export const addCourse = async (req, res) => {
    //extract new values from req.body
    const newCourse = req.body;

    //insert into db
    await Course.create(newCourse);
    return res.status(201).send({ message: "Course is added successfully..." });
  }