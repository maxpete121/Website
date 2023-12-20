import { Schema } from "mongoose";




export const ItemSchema = new Schema({
    name: {type: String, maxLength: 35, required: true},
    description: {type: String, maxLength: 200, required: true},
    imgUrl: {type: String, maxLength: 300, required: true},
    Specs: {type: Array, items: ['cpu','gpu','ram'],required: true}
})