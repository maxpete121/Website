import { dbContext } from "../db/DbContext.js"






class SpecsService{

    async getSpecs(){
        const allSpecs = await dbContext.Specs.find()
        return allSpecs
    }

    async postSpecs(specData){
        const newSpec = dbContext.Specs.create(specData)
        return newSpec
    }
}


export const specsService = new SpecsService()

