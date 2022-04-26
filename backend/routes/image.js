const express = require("express");
const router = express.Router();

const imageController = require("../controllers/image");

router.get("/", imageController.getUploadForm);
router.post("/upload", imageController.postUploadFile);

module.exports = router;