import { Schema } from "mongoose";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 100 },
        biome: { type: String, required: true, maxLength: 100 },
        atmosphere: { type: Boolean, required: true, default: false },
        galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)