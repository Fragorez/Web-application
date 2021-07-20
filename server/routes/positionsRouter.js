const Router = require("express");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const positionsController = require("../controllers/positionsController");
const router = new Router();
router.post("/", checkRoleMiddleware("ADMIN"), positionsController.create);
router.get("/", checkRoleMiddleware("ADMIN"), positionsController.getAll);

module.exports = router;
