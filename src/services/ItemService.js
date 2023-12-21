import { dbContext } from "../db/DbContext.js"



class ItemService{

    async postComputer(newItem){
        const newItems = await dbContext.Items.create(newItem)
        return newItems
    }

    async getItems(){
        const allItems = await dbContext.Items.find().populate('specs')
        return allItems
    }

    async findItem(itemId){
        const foundItem = await dbContext.Items.findById(itemId).populate('specs')
        return foundItem
    }

    async removeItem(itemId){
        const itemToRemove = await dbContext.Items.findById(itemId)
        await itemToRemove.remove()
        return `Item removed`
    }

    async updateItem(itemId, update){
        const itemUpgrade = await dbContext.Items.findById(itemId)
        itemUpgrade.name = update.name ? update.name : itemUpgrade.name
        itemUpgrade.price = update.price ? update.price : itemUpgrade.price
        itemUpgrade.buildType = update.buildType ? update.buildType : itemUpgrade.buildType
        itemUpgrade.description = update.description ? update.description : itemUpgrade.description
        itemUpgrade.imgUrl = update.imgUrl ? update.imgUrl : itemUpgrade.imgUrl
        itemUpgrade.specsId = update.specsId ? update.specsId : itemUpgrade.specsId
        await itemUpgrade.save()
        return itemUpgrade
    }
}




export const itemService = new ItemService()