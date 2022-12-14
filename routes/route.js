import express from "express";
import {
  deleteComment,
  getAllComments,
  newComment,
} from "../controller/comment-controller.js";
// import { uploadImage } from "../controller/imageController.js";
import { authenticateToken } from "../controller/jwt-controller.js";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controller/post-controller.js";

import { signupUser, loginUser } from "../controller/user-controller.js";

// import upload from "../utils/upload.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "hello api" });
});

router.post("/signup", signupUser);
router.post("/login", loginUser);

// router.post("/file/upload", upload.single("file"), uploadImage);

router.post("/create", authenticateToken, createPost);

router.get("/posts", authenticateToken, getAllPosts);

router.get("/post/:id", authenticateToken, getPost);

router.put("/update/:id", authenticateToken, updatePost);

router.delete("/delete/:id", authenticateToken, deletePost);

router.post("/comment/new", authenticateToken, newComment);

router.get("/comments/:id", authenticateToken, getAllComments);

router.delete("/comment/delete/:id", authenticateToken, deleteComment);

export default router;
