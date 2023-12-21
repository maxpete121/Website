import { dbContext } from "../db/DbContext.js"






class HighTierService{

    async postHigh(hTData){
        const hTPosted = await dbContext.HighTier.create(hTData)
        return hTPosted
    }

    async getTier(){
        const allTier = await dbContext.HighTier.find().populate('specs')
        return allTier
    }

    async deleteTier(tierId){
        const toDelete = await dbContext.HighTier.findById(tierId)
        toDelete.remove()
        return `High Tier PC deleted`
    }

    async updateHighTier(tierId, upgrade){
        const tierToUpgrade = await dbContext.HighTier.findById(tierId)
        tierToUpgrade.name = upgrade.name ? upgrade.name : tierToUpgrade.name
    }
}

export const highTierService = new HighTierService()