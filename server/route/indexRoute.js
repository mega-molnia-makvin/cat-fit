const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware");
const path = require("path");



const createPath = (page)=> path.resolve(__dirname,'..', 'ejs-views',  `${page}.ejs`);
router.get("/", (req, res)=>{
    res.render(createPath('index'));
   // res.send(str);
} );

module.exports = router;
