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
        tierToUpgrade.buildType = upgrade.buildType ? upgrade.buildType : tierToUpgrade.buildType
        tierToUpgrade.price = upgrade.price ? upgrade.price : tierToUpgrade.price
        tierToUpgrade.description = upgrade.description ? upgrade.description : tierToUpgrade.description
        tierToUpgrade.imgUrl = upgrade.imgUrl ? upgrade.imgUrl : tierToUpgrade.imgUrl
        tierToUpgrade.specsId = upgrade.specsId ? upgrade.specsId : tierToUpgrade.specsId
        await tierToUpgrade.save()
        return tierToUpgrade
    }
}

export const highTierService = new HighTierService()