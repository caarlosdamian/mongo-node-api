import expres from "express";
import {

  createForm
} from "../controllers/form.js";
const router = expres.Router();

router.post("/form", createForm);

export default router;
