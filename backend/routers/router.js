const { Router } = require("express");
const router = Router();
const eduValidation = require("../validation/eduValidation");
const teacherValidation = require("../validation/teacherValidation");

const { getEducations,
  deleteEducation,
  updateEducation,
  createEducations,
  login, } = require("../controller/educationControllers");

const teacherController = require("../controller/TeacherController");


// Education routes

router.get("/edu/all", getEducations);
router.post("/edu/create", eduValidation, createEducations);
router.delete("/edu/delete/:id", deleteEducation);
router.put("/edu/update/:id", eduValidation, updateEducation);
router.post("/edu/login", login);

// Teacher routes

router.get("/teacher/all", teacherController.getTechers);
router.post(
  "/teacher/create",
  teacherValidation,
  teacherController.createTecher
);

module.exports = router;
