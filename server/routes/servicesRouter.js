const Router = require("express");
const servicesController = require("../controllers/servicesController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

const router = new Router();
router.post("/", checkRoleMiddleware("ADMIN"), servicesController.create);
router.get("/", servicesController.getAll);

module.exports = router;
