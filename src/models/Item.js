import { Schema } from "mongoose";
import { SpecsSchema } from "./Specs.js";




export const ItemSchema = new Schema({
    name: {type: String, maxLength: 35, required: true},
    price: {type: String, maxLength: 30, required: true},
    description: {type: String, maxLength: 200, required: true},
    imgUrl: {type: String, maxLength: 300, required: true},
    specsId: {type: Schema.Types.ObjectId, ref: 'Specs', required: true}
},{toJSON: {virtuals: true}})

ItemSchema.virtual('specs', {
    localField: 'specsId',
    foreignField: '_id',
    ref: 'Specs'
})

