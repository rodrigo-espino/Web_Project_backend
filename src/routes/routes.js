import { Router } from "express";
import { login } from "../controllers/login";
import { signup } from "../controllers/signup";
import { getComments, createComment } from "../controllers/comments";
const router = Router();

router.post("/login", login);

router.post("/signup", signup);

router.get("/comments", getComments);
router.post("/comments", createComment);

export default router;
