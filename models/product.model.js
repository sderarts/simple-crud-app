import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const ProductSchema = Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter product name"],

        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        
        price: {
            type: Number,
            required: true,
            default: 0
        },

        image:{
            type: String,
            required: false
        },

    },
    {
        timestamps: true,
    }
);

const Product = model("Product", ProductSchema );

export default Product;