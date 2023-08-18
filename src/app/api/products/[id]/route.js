import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";

connect();

export async function GET(NextRequest, {params}){
    try {
        const product = await Product.findById(params.id);

        if (!product) {
            return NextResponse.json({
                message: "Product not found",
                success: false,   
                status: 400,                
            })
        }

        return NextResponse.json({
          message: "",
          product, product,
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


export async function PUT(NextRequest, {params}){
    try {
        const reqBody = await NextRequest.json();
        const {title, description, price} = reqBody;

        const product = await Product.findById(params.id);

        if (!product) {
            return NextResponse.json({
                message: "Product not found",
                success: false,   
                status: 400,                
            })
        }

        product.title = title;
        product.description = description;
        product.price = price;
        await product.save();        

        return NextResponse.json({
            message: "Product Updated successfully",
            success: true,            
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


export async function DELETE(NextRequest, {params}){
    try {
        
        const product = await Product.findById(params.id);

        if (!product) {
            return NextResponse.json({
                message: "Product not found",
                success: false,   
                status: 400,                
            })
        }

        await product.deleteOne();

        return NextResponse.json({
            message: "Product Deleted successfully",
            success: true,            
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

