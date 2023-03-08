const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateScore,
  updateUserProfile,
  getUsers
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//user registration
router.route("/").post(registerUser).get(getUsers);

//post email and password auth
router.post("/login", authController);

//get user profile Private Route
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

//get user profile Private Route
router
  .route("/score")
  .put(protect, updateScore);

module.exports = router;
