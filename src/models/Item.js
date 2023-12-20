import { Schema } from "mongoose";




export const ItemSchema = new Schema({
    name: {type: String, maxLength: 35, required: true},
    description: {type: String, maxLength: 200, required: true},
    imgUrl: {type: String, maxLength: 300, required: true},
    cpu: {type: String, maxLength: 20, required: true},
    gpu: {type: String, maxLength: 20, required: true},
    ram: {type: String, maxLength: 20, required: true}
})



