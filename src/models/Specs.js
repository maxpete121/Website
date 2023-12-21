import { Schema } from "mongoose";






export const SpecsSchema = new Schema({
    cpu:{type: String, required: true},
    gpu:{type: String, required: true},
    ram:{type: String, required: true}
})