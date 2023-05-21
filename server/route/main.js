const Router = require("express");
const router = new Router();

const purchasesRoute = require("./purchasesRoute");
const masterRoute = require("./masterRoute");
const sportsRoute = require("./sportsRoute");
const namedSportRoute = require("./namedSportRoute");
const userRoute = require("./userRoute");
const trainingRoute = require("./trainingRoute");

const getPageRoutes = require("./getPageRoutes");


router.use("/user", userRoute);
router.use("/purchases", purchasesRoute);
router.use("/sports", sportsRoute);
router.use("/namedsport", namedSportRoute);
router.use("/master", masterRoute);
router.use("/training", trainingRoute);

router.use("/", getPageRoutes);

router.use((req, res)=>{
    res
    .status(404)
    .send('<h1>Путь не существует</h1>');
});

module.exports = router;





