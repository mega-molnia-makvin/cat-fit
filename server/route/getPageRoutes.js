const Router = require("express");
const router = new Router();
const cardController = require('../controllers/cardController')
const path = require("path");
const  {User, Master, Sports,Named_Sport, Card_Training,Training,Card} = require("../models/models")


const createPath = (page)=> path.resolve(__dirname, '..',  'ejs-views',  `${page}.ejs`);


router.get('/card', (req, res)=>{
    res.render(createPath('cards'));
    //res.send(str);
} );

router.get("/", (req, res)=>{
    res.render(createPath('index'));
} );

router.get("/office", (req, res)=>{
    res.render(createPath('office'));
} );

router.get('/team', (req, res)=>{
    res.render(createPath('team'));
} );

router.get('/pay', (req, res)=>{
    res.render(createPath('pay'));
} );

router.get('/timetab', (req, res)=>{
    const title = 'Home'

    
    const sports =[
        {dayofWeek: 'Пн', price: 100}
    ];

    res.render(createPath('timetab'), {title, sports});
} );

router.get('/', (req, res)=>{
    res.render(createPath('office'));
} );

router.use((req, res)=>{
    res
    .status(404)
    .send('<h1>Путь не существует</h1>');
});



module.exports = router;
