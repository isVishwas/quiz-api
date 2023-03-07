const express = require("express");
const {
    createQuestion,
    getQuestions,
    updateQuestions
} = require("../controllers/questionsController");

const router = express.Router();

//add Question
router.route("/").post(createQuestion).get(getQuestions).put(updateQuestions);



module.exports = router;
