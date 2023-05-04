import {makeAutoObservable} from "mobx";


export default class SportStore {
    constructor(){
        this._types = [
            {id: 1, name: 'sport'},
            {id:2, name: 'card'}
        ]
        this._price =[
            {id:1, name: 'yoga', price:500},
            {id:2, name: 'hula', price:400},
            {id:3, name: 'hula', price:400},
            {id:4, name: 'hula', price:400},
            {id:5, name: 'hula', price:400}
        ]
        this._master=[
            {id:1, name: 'lapka'},
            {id:2, name: 'lapka'}
        ]
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types=types
    }
    setPrice(price){
        this._price=price
    }
    setMaster(master){
        this._master=master
    }

    get types(){
        return this._yupes
    }
    get price(){
        return this._price
    }
    get master(){
        return this._master
    }
}