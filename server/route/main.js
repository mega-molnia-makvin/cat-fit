const Router = require("express");
const router = new Router();
const purchasesRoute = require("./purchasesRoute");
const masterRoute = require("./masterRoute");
const sportsRoute = require("./sportsRoute");
const namedSportRoute = require("./namedSportRoute");
const trainingRoute = require("./trainingRoute");

const indexRoute = require("./indexRoute");
const teamRoute = require("./teamRoute");
const timetabRoute = require("./timetabRoute");
const cardRoute = require("./cardRoute");
const userRoute = require("./userRoute");
const officeRoute = require("./officeRoute");


router.use("/", indexRoute);
router.use("/team", teamRoute);
router.use("/timetab", timetabRoute);
router.use("/card", cardRoute);
router.use("/user", userRoute);
router.use("/office", officeRoute);


router.use("/purchases", purchasesRoute);
router.use("/sports", sportsRoute);
router.use("/namedsport", namedSportRoute);
router.use("/master", masterRoute);
router.use("/training", trainingRoute);

router.use((req, res)=>{
    res
    .status(404)
    .send('<h1>Путь не существует</h1>');
});

module.exports = router;





