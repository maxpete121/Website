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
}




export const itemService = new ItemService()