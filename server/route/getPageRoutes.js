const Router = require("express");
const router = new Router();
const path = require("path");
const  {User, Master, Sports,Named_Sport, Card_Training,Training,Card} = require("../models/models")

const timetabController = require("../controllers/timetabController");
const officeController = require("../controllers/officeController");
const userController = require("../controllers/userController");



const createPath = (page)=> path.resolve(__dirname, '..',  'ejs-views',  `${page}.ejs`);





router.get('/card', (req, res)=>{
    res.render(createPath('cards'));
} );

router.get("/", (req, res)=>{
    res.render(createPath('index'));
} );

router.get("/office",  officeController.getAll);

router.get('/team', (req, res)=>{
    res.render(createPath('team'));
} );

router.get('/pay', (req, res)=>{
    res.render(createPath('pay'));
} );

router.get('/timetab', timetabController.getAll );



router.use((req, res)=>{
    res
    .status(404)
    .send('<h1>Путь не существует</h1>');
});



module.exports = router;
