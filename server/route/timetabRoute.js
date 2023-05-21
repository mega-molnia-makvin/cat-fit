const Router = require("express");
const router = new Router();
const path = require("path");

const createPath = (page)=> path.resolve(__dirname, '..',  'ejs-views',  `${page}.ejs`);

router.get('/', (req, res)=>{
    const title = 'Home'
    const trainings =[
        {name: 'Йога', time: '12:00'}
    ];
    res.render(createPath('timetab'), {title, trainings});
    //res.send(str);
} );


module.exports = router;


module.exports = router;