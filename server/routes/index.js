const Router = require("express");

const router = new Router();
const clientsRouter = require("./clientsRouter");
const recordsRouter = require("./recordsRouter");
const servicesRouter = require("./servicesRouter");
const userRouter = require("./userRouter");
const employeesRouter = require("./employeesRouter");
const positionsRouter = require("./positionsRouter");

router.use("/client", clientsRouter);
router.use("/records", recordsRouter);
router.use("/service", servicesRouter);
router.use("/user", userRouter);
router.use("/employee", employeesRouter);
router.use("/position", positionsRouter);

module.exports = router;
