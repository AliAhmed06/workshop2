import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";

connect();
export async function GET(NextRequest){
    try {
        const products = await Product.find(); 

        return NextResponse.json({
          message: "",
          products,
          success: true          
        })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false
        })
    }
}


export async function POST(NextRequest){
    try {
        const reqBody = await NextRequest.json();
        const {title, description, price} = reqBody;

        const newProduct = new Product({
            title,
            description,
            price,
        })

        // Save product in db
        const savedProduct = await newProduct.save();
        
        return NextResponse.json({
            message: "Product Saved successfully",
            success: true,
            savedProduct
        })
    }
    catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false,
        })
    }
}


