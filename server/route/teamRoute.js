const Router = require("express");
const router = new Router();
const path = require("path");

const createPath = (page)=> path.resolve(__dirname, '..',  'ejs-views',  `${page}.ejs`);

router.get('/', (req, res)=>{

    res.render(createPath('team'));
    //res.send(str);
} );



module.exports = router;