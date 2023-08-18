import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Provide a product title"],        
    },
    description: {
        type: String,
        required: [true, "Please Provide product description"],
        unique: true
    },
    price: {
        type: String,
        required: [true, "Please Provide product price"],        
    },    
})

const Product = mongoose.models.product || mongoose.model("product", productSchema);

export default Product;

