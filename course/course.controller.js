import express from "express";
import {
  validateMongoIdFromParams,
  deleteCourse,
  validateSchema,
  addCourse,
} from "./course.service.js";
const router = express.Router();

//add course

router.post("/add", validateSchema, addCourse);

//delete a course {course.service.js}
router.delete("/delete/:id", validateMongoIdFromParams, deleteCourse);

export default router;
