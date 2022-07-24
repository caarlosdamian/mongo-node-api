import expres from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
import formRouter from "./routes/form.js";
import bodyParser from "body-parser";


dotenv.config();

const app = expres();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", userRouter);
app.use("/api/v1", formRouter);

// mongo db connection
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("connected to mongo db"))
  .catch((err) => console.log(err));

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
