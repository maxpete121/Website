import { itemService } from "../services/ItemService.js";
import BaseController from "../utils/BaseController.js";




export class ItemController extends BaseController{
    constructor(){
        super('api/items')
        this.router
        .get('', this.getItems)
        .get('/find/:itemId', this.findItem)
        .post('', this.postComputer)
        .delete('/:itemId', this.removeItem)

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
            next(error)
        }
    }

    async findItem(request, response, next){
        try {
            const itemId = request.params.itemId
            const item = await itemService.findItem(itemId)
            response.send(item)
        } catch (error) {
            next(error)
        }
    }

    async removeItem(request, response, next){
        try {
            const itemId = request.params.itemId
            const removed = await itemService.removeItem(itemId)
            response.send(removed)
        } catch (error) {
            next(error)
        }
    }

    async updateItem(request, response, next){
        try {
            const itemId = request.params.itemId
            const updated = await itemService.updateItem()
        } catch (error) {
            
        }
    }
}