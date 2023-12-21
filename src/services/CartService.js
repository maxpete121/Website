import { dbContext } from "../db/DbContext.js"







class CartService{

    async postCart(cartData){
        const cartPost = await dbContext.Cart.create(cartData)
        return cartPost
    }

    async getCart(){
        const cartGet = await dbContext.Cart.find().populate('specs')
        return cartGet
    }

    async deleteCart(cartId){
        const cartFound = await dbContext.Cart.findById(cartId)
        await cartFound.remove()
        return`Cart item deleted`
    }
}


export const cartService = new CartService()