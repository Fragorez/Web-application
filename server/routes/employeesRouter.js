const Router = require("express");
const employeesController = require("../controllers/employeesController");
const router = new Router();
const checkRole = require("../middleware/checkRoleMiddleware");
router.post("/", checkRole("ADMIN"), employeesController.create);
router.get("/", employeesController.getAll);
module.exports = router;
