import { get } from "mongoose";
import { cartService } from "../services/CartService.js";
import BaseController from "../utils/BaseController.js";







export class CartController extends BaseController{
    constructor(){
        super('api/cart')
        this.router
        .get('', this.getCart)
        .post('', this.postCart)
        .delete('/:cartId', this.deleteCart)
    }

    async getCart(request, response, next){
        try {
            const getCart = await cartService.getCart()
            response.send(getCart)
        } catch (error) {
            next(error)
        }
    }


    async postCart(request, response, next){
        try {
            const cartData = request.body
            const fillCart = await cartService.postCart(cartData)
            response.send(fillCart)
        } catch (error) {
            next(error)
        }
    }

    async deleteCart(request, response, next){
        try {
            const cartId = request.params.cartId
            const cartDelete = await cartService.deleteCart(cartId)
            response.send(cartDelete)
        } catch (error) {
            next(error)
        }
    }
}