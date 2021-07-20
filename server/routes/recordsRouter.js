const Router = require("express");
const recordsController = require("..//controllers/recordsController");
const checkRole = require("../middleware/checkRoleMiddleware");

const router = new Router();

router.post("/", recordsController.create);
router.get("/", checkRole("ADMIN"), recordsController.getAll);

module.exports = router;
