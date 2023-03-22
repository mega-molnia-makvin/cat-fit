const Router = require("express");
const router = new Router();
const cardRoute = require("./cardRoute");
const connectionRoute = require("./connectionRoute");
const masterRoute = require("./masterRoute");
const sportsRoute = require("./sportsRoute");
const namedSportRoute = require("./namedSportRoute");
const userRoute = require("./userRoute");

router.use("/user", userRoute);
router.use("/card", cardRoute);
router.use("/connection", connectionRoute);
router.use("/sports", sportsRoute);
router.use("/namedsport", namedSportRoute);
router.use("/master", masterRoute);

module.exports = router;
