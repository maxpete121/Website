import { itemService } from "../services/ItemService.js";
import BaseController from "../utils/BaseController.js";




export class ItemController extends BaseController{
    constructor(){
        super('api/items')
        this.router
        .get('', this.getItems)
        .post('', this.postComputer)

    }

    async postComputer(request, response, next){
        try {
            const newItem = request.body
            const ItemData = await itemService.postComputer(newItem)
            response.send(ItemData) 
        } catch (error) {
            next(error)
        }
    }

    async getItems(request, response, next){
        try {
            const Items = await itemService.getItems()
            response.send(Items)
    
        } catch (error) {
            
        }
    }
}