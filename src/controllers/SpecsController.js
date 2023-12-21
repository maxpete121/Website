import { specsService } from "../services/SpecsService.js";
import BaseController from "../utils/BaseController.js";






export class SpecsController extends BaseController{
    constructor(){
        super('api/specs')
        this.router
        .get('', this.getSpecs)
        .post('', this.postSpecs)
    }


    async getSpecs(request, response, next){
        try {
            const specs = await specsService.getSpecs()
            response.send(specs)
        } catch (error) {
            next(error)
        }
    }

    async postSpecs(request, response, next){
        try {
            const specData = request.body
            const specs = await specsService.postSpecs(specData)
            response.send(specs)
        } catch (error) {
            next(error)
        }
    }
}