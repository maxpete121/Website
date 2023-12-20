import { dbContext } from "../db/DbContext.js"



class ItemService{

    async postComputer(newItem){
        const newItems = await dbContext.Items.create(newItem)
        return newItems
    }

    async getItems(){
        const allItems = await dbContext.Items.find()
        return allItems
    }

    async findItem(itemId){
        const foundItem = await dbContext.Items.findById(itemId)
        return foundItem
    }

    async removeItem(itemId){
        const itemToRemove = await dbContext.Items.findById(itemId)
        await itemToRemove.remove()
        return `Item removed`
    }

    async updateItem(){
        
    }
}




export const itemService = new ItemService()