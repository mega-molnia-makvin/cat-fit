const Router = require("express");
const router = new Router();


const masterRoute = require("./masterRoute");
const userRoute = require("./userRoute");


const getPageRoutes = require("./getPageRoutes");


router.use("/user", userRoute);
router.use("/master", masterRoute);


router.use("/", getPageRoutes);

router.use((req, res)=>{
    res
    .status(404)
    .send('<h1>Путь не существует</h1>');
});

module.exports = router;





