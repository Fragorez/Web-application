const Router = require("express");
const clientsController = require("..//controllers/clientsController");
const checkRole = require("../middleware/checkRoleMiddleware");

const router = new Router();

router.post("/", clientsController.create);
router.get("/", checkRole("ADMIN"), clientsController.getAll);

module.exports = router;
