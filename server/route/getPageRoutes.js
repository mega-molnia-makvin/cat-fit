const Router = require("express");
const router = new Router();
const cardController = require('../controllers/cardController')
const path = require("path");
const  {User, Master, Sports,Named_Sport, Card_Training,Training,Card} = require("../models/models")

const timetabController = require("../controllers/timetabController");
const officeController = require("../controllers/officeController");


const createPath = (page)=> path.resolve(__dirname, '..',  'ejs-views',  `${page}.ejs`);



router.get('/test', (req, res)=>{
     //res.cookie('sky', 'blue', {httpOnly: true, maxAge: 12000});
    // res.cookie('grass', 'green');
    //console.log(req.cookies);
    //if (req.session.user) name = req.session.user
    const name = req.session.user || "Guest";

    res.cookie("simpletest", "qwerty", { httpOnly: true })

    res.send(`<h1> Приветик, ${name}!</h1>
    <form action="/choose-name" method="POST">
      <input type="text" name="name" placeholder="your name"> 
      <button>Submit</button>
    </form>
    <form action="/logout" method="POST">
    <button>Logout</button>
  </form>
  `);
});

router.post("/choose-name", (req, res) => {
    req.session.user = req.body.name.trim()
    res.send(`<p>Thank you</p> <a href="/test">Back home</a>`)
  })
  

 


    


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



router.get('/', (req, res)=>{
    res.render(createPath('office'));
} );

router.use((req, res)=>{
    res
    .status(404)
    .send('<h1>Путь не существует</h1>');
});



module.exports = router;
