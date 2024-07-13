import express from "express";
import connectDB from "./connect.db.js";
import courseRoutes from "./course/course.controller.js";
//

const app = express();

//to make app understand json
app.use(express.json());

//database connection

connectDB();

app.use(courseRoutes);
app.use("/course", courseRoutes);

const PORT = 8090;


app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
