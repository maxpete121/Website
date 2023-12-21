import { request } from "express";
import BaseController from "../utils/BaseController.js";
import { highTierService } from "../services/HighTierService.js";
import { Auth0Provider } from "@bcwdev/auth0provider";





export class HighTierController extends BaseController{
    constructor(){
        super('api/highTier')
        this.router
        .get('', this.getTier)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.postHigh)
        .put('/:tierId', this.updateHighTier)
        .delete('/:tierId', this.deleteTier)
    }

    async postHigh(request, response, next){
        try {
            const hTData = request.body
            const highTier = await highTierService.postHigh(hTData)
            response.send(highTier)
        } catch (error) {
            next(error)
        }
    }

    async getTier(request, response, next){
        try {
            const tierG = await highTierService.getTier()
            response.send(tierG)
        } catch (error) {
            next(error)
        }
    }

    async deleteTier(request, response, next){
        try {
            const tierId = request.params.tierId
            const deletedTier = await highTierService.deleteTier(tierId)
            response.send(deletedTier)
        } catch (error) {
            next(error)
        }
    }

    async updateHighTier(request, response, next){
        try {
            const tierId = request.params.tierId
            const upgrade = request.body
            const updatedTier = await highTierService.updateHighTier(tierId, upgrade)
            response.send(updatedTier)
        } catch (error) {
            next(error)
        }
    }
}