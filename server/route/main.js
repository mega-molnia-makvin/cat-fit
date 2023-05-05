const Router = require("express");
const router = new Router();
const cardRoute = require("./cardRoute");
const purchasesRoute = require("./purchasesRoute");
const masterRoute = require("./masterRoute");
const sportsRoute = require("./sportsRoute");
const namedSportRoute = require("./namedSportRoute");
const userRoute = require("./userRoute");
const trainingRoute = require("./trainingRoute");


router.use("/user", userRoute);
router.use("/card", cardRoute);
router.use("/purchases", purchasesRoute);
router.use("/sports", sportsRoute);
router.use("/namedsport", namedSportRoute);
router.use("/master", masterRoute);
router.use("/training", trainingRoute);

module.exports = router;
