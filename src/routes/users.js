import expres from "express";
import {
  createUser,
  deleteUser,
  getAllusers,
  getUserById,
  updateUser,
} from "../controllers/users.js";
const router = expres.Router();

// create user
router.post("/users", createUser);
// get users
router.get("/users", getAllusers);
// get user by id
router.get("/users/:id", getUserById);
// update user
router.put("/users/:id", updateUser);
// delete user
router.delete("/users/:id", deleteUser);
export default router;
