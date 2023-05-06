const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware")


const createPath = (page)=> path.resolve(_dirname, 'views', `${page}.html`);

router.post("/registration", userController.registration);
router.post("/login", userController.login);
// router.get("/auth", authMiddleware, userController.check);

var view = require("./views")
var office = view.readFileSync('./office.html')

router.get('/', (req, res)=>{
    //res.sendFile(createPath('office'));
    res.end(office);
    //console.log(createPath('office'));
} );
module.exports = router;

