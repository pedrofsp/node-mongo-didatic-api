const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/EmployeeController");
const upload = require("../middleware/upload");

router.get("/", EmployeeController.index);
router.get("/:uid", EmployeeController.show);
router.post("/store", upload.single("avatar"), EmployeeController.store);
router.put("/:uid", EmployeeController.update);
router.delete("/:uid", EmployeeController.destroy);

module.exports = router;
