const { User, Card,
    Master,
    Sports,
    Named_Sport,
    Card_Training,
    Training,
    } = require("./models");


const defaultDb = async () =>{
    let count = await Sports.count({})
    if (count === 0){
        await User.create({
            name: 'Ефремов', surname: 'Константин', password: '$2b$05$SZ2.CKh.QA./71F.H5t46OObWa/TOyTctccG1iDHu/slBOp7onjFq', role: 'ADMIN', telephone: '89674351276'
        });

        await Card.create({
            number: '123', firstDate: '2023-04-25', lastDate:'2024-04-25', balance: 1000, userId: 1            
        });

        await Master.create({
            name: 'Роман', surname: 'Куликов',  password: '$2b$05$SZ2.CKh.QA./71F.H5t46OObWa/TOyTctccG1iDHu/slBOp7onjFq', telephone: '89543875434'
        });
        await Master.create({
            name: 'Алена', surname: 'Егорова',  password: '$2b$05$SZ2.CKh.QA./71F.H5t46OObWa/TOyTctccG1iDHu/slBOp7onjFq', telephone: '89543875474'
        });

        await Named_Sport.create({ name: 'Йога'});
        await Named_Sport.create({ name: 'Бассейн'});
        await Named_Sport.create({ name: 'Конный спорт'});
        await Named_Sport.create({ name: 'Хула'});
        await Named_Sport.create({ name: 'Велосипед'});
        
        await Sports.create({
            firstTime:'8:30', lastTime: '9:30', price: 300, dayofWeek:'Понедельник', masterId: 2, namedSportId:1
        });
        await Sports.create({
            firstTime:'18:00', lastTime: '19:30', price: 500, dayofWeek:'Понедельник', masterId: 2, namedSportId:2
        });
        await Sports.create({
            firstTime:'9:00', lastTime: '10:00', price: 300, dayofWeek:'Вторник', masterId: 1, namedSportId: 5
        });
        await Sports.create({
            firstTime:'19:30', lastTime: '20:30', price: 400, dayofWeek:'Вторник', masterId: 1, namedSportId:4
        });
        await Sports.create({
            firstTime:'10:30', lastTime: '11:30', price: 300, dayofWeek:'Среда', masterId: 2, namedSportId:1
        });     
        await Sports.create({
            firstTime:'18:30', lastTime: '19:30', price: 200, dayofWeek:'Среда', masterId: 2, namedSportId: 5
        }); 
        await Sports.create({
            firstTime:'9:00', lastTime: '10:00', price: 300, dayofWeek:'Четверг', masterId: 1, namedSportId: 2
        });  
        await Sports.create({
            firstTime:'19:30', lastTime: '20:30', price: 200, dayofWeek:'Четверг', masterId: 2, namedSportId: 5
        });  
        await Sports.create({
            firstTime:'8:30', lastTime: '9:30', price: 300, dayofWeek:'Пятница', masterId: 1, namedSportId: 2
        });  
        await Sports.create({
            firstTime:'18:30', lastTime: '19:30', price: 300, dayofWeek:'Пятница', masterId: 2, namedSportId: 4
        });  
        await Sports.create({
            firstTime:'19:40', lastTime: '20:40', price: 350, dayofWeek:'Пятница', masterId: 2, namedSportId: 2
        });  
        await Sports.create({
            firstTime: '12:30', lastTime: '13:30', price: 300, dayofWeek:'Суббота', masterId: 2, namedSportId: 1
        }); 
        await Sports.create({
            firstTime:'13:00', lastTime: '14:00', price: 300, dayofWeek:'Воскресенье', masterId: 1, namedSportId: 1
        }); 

        await Training.create({
            date: '2023-06-22' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 1
        });
        await Training.create({
            date: '2023-06-22' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 2
        });
        await Training.create({
            date: '2023-06-23' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 3
        });
        await Training.create({
            date: '2023-06-23' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 4
        });
        await Training.create({
            date: '2023-06-24' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 5
        });
        await Training.create({
            date: '2023-06-24' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 6
        });
        await Training.create({
            date: '2023-06-25' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 7
        });
        await Training.create({
            date: '2023-06-25' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 8
        });
        await Training.create({
            date: '2023-06-26' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 9
        });
        await Training.create({
            date: '2023-06-26' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 10
        });
        await Training.create({
            date: '2023-06-26' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 11
        });
        await Training.create({
            date: '2023-06-27' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 12
        });
        await Training.create({
            date: '2023-06-28' , numberOfPlaces: 20, numberOfAvailablePlaces: 19, sportId: 13
        });

        await Card_Training.create({
            cardNumber: 123, trainingId: 10
        });
        await Card_Training.create({
            cardNumber: 123, trainingId: 11
        });
        await Card_Training.create({
            cardNumber: 123, trainingId: 9
        });
        await Card_Training.create({
            cardNumber: 123, trainingId: 3
        });       
    
    }    
}

module.exports = {defaultDb }