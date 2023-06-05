const { User, Master, Sports, Named_Sport, Card_Training, Training, Card} = require('../models/models');
const ApiError = require("../error/ApiError");
const path = require("path");
const createPath = (page)=> path.resolve(__dirname, '..',  'ejs-views',  `${page}.ejs`);

class timetabController {
    async getAll(req, res){

            
            const sports = await Sports.findAll({
                include:  [{
                    model: Named_Sport,
                    attributes: ["name"]
                },
                {
                    model: Master,
                    attributes: ["name", "surname"]
                },
            ]
            });

        


           // console.log(sports2);
        
            res.render(createPath('timetab'), {trainings: sports});
            //res.send(sports);
     
            
    }

    async getAllId(){            
        const idSports = await Sports.findAll({
            attributes: ["id"]
        }); 
       return idSports;        
}
}



module.exports = new timetabController ;
