import { dbContext } from "../db/DbContext.js"



class ItemService{

    async postComputer(newItem){
        const newItems = await dbContext.Items.create(newItem)
        return newItems
    }

    async getItems(){
        
    }
}




export const itemService = new ItemService()