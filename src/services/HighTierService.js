import { dbContext } from "../db/DbContext.js"






class HighTierService{

    async postHigh(hTData){
        const hTPosted = await dbContext.HighTier.create(hTData)
        return hTPosted
    }

    async getTier(){
        const allTier = await dbContext.HighTier.find()
        return allTier
    }

    async deleteTier(tierId){
        const toDelete = await dbContext.HighTier.findById(tierId)
        toDelete.remove()
        return `High Tier PC deleted`
    }
}

export const highTierService = new HighTierService()