import { Schema } from "mongoose";





export const CartSchema = new Schema({
    name: {type: String, maxLength: 35, required: true},
    price: {type: String, maxLength: 30, required: true},
    buildType: {type: String, enum: ['ATX', 'Micro ATX', 'ITX'], maxLength: 30, required: true},
    description: {type: String, maxLength: 200, required: true},
    imgUrl: {type: String, maxLength: 300, required: true},
    specsId: {type: Schema.Types.ObjectId, ref: 'Specs', required: true}
}, {toJSON: {virtuals: true}})


CartSchema.virtual('specs', {
    localField: 'specsId',
    foreignField: '_id',
    ref: 'Specs'
})