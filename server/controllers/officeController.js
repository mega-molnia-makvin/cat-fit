const { User, Master, Sports, Named_Sport, Card_Training, Training, Card} = require('../models/models');
const ApiError = require("../error/ApiError");
const path = require("path");
const createPath = (page)=> path.resolve(__dirname, '..',  'ejs-views',  `${page}.ejs`);

class officeController {
    async getAll(req, res){
        const userId = 1;
    


        const sports = await Sports.findAll({
            order: ['firstTime'],            
            include:  [{
                model: Named_Sport,
            },
            {
                model: Master,
                attributes: ["name", "surname"]
            },
            {
                model: Training,
                required: true,
                include:[{
                    model: Card_Training,
                    required: true,
                    include:{
                        model: Card,
                        required: true,
                        include:{
                            model: User,
                            required: true,
                            where: {id:1},
                        }
                    }
                }]
            }
        ]
        });   

            
        const user = await User.findOne({
            include:  [{
                model: Card
                    
            } ],
            where: {id: 1}   
        });
        //console.log(JSON.stringify(sports, null, 2));
        
            res.render(createPath('office'), { user, sports});
            //res.send(user);
     
            
    }
}



module.exports = new officeController ;
