import express from "express";
import { validateMongoIdFromParams, deleteCourse } from "./course.service.js";
const router = express.Router();

//add course
router.post(
  "/add",
  async (req, res, next) => {
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
  },
  async (req, res) => {
    //extract new values from req.body
    const newCourse = req.body;

    //insert into db
    await Course.create(newCourse);
    return res.status(201).send({ message: "Course is added successfully..." });
  }
);

//delete a course {course.service.js}
router.delete("/delete/:id", validateMongoIdFromParams, deleteCourse);

export default router;
