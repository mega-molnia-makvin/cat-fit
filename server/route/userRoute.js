const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const path = require("path");



router.post("/registration", userController.registration);
router.post("/login", userController.login);
// router.get("/auth", authMiddleware, userController.check);


const createPath = (page)=> path.resolve(__dirname,'..', 'ejs-views',  `${page}.ejs`);
router.get('/', (req, res)=>{
    res.render(createPath('office'));
   // res.send(str);
} );

module.exports = router;

