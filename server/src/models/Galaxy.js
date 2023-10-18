import { Schema } from "mongoose";

export const GalaxySchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 65 },
        stars: { type: Number, required: true, max: 10000000000000000000000000 },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)

GalaxySchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})