import express from "express";
import {
  signup,
  signin,
  signout,
  adminSignin,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/admin/signin", adminSignin);

export default router;
