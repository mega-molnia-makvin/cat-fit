const Router = require("express");
const router = new Router();
const path = require("path");
const timetabController = require("../controllers/timetabController");

const createPath = (page)=> path.resolve(__dirname, '..',  'ejs-views',  `${page}.ejs`);

router.get('/', (req, res)=>{
    const title = 'Home'
    // const trainings =[
    //     {name: 'Йога', time: '12:00'}
    // ];

    const trainings = timetabController.getAll();
    console.log(trainings);
    //res.render(createPath('timetab'), {trainings});
    res.send(trainings);
} );


module.exports = router;


module.exports = router;