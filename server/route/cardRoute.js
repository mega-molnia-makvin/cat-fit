const Router = require("express");
const router = new Router();
const cardController = require('../controllers/cardController')
const path = require("path");

router.post("/", cardController.create);
//router.get("/", cardController.getAll);


const createPath = (page)=> path.resolve(__dirname, '..',  'ejs-views',  `${page}.ejs`);
router.get('/', (req, res)=>{
    res.render(createPath('cards'));
    //res.send(str);
} );


module.exports = router;
