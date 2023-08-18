import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import { stat, mkdir, writeFile } from "fs/promises";
import { join } from "path";



connect();
export async function POST(NextRequest){
    try {
        // const reqBody = await NextRequest.json();
        // const {fileData} = reqBody;
        const data = await NextRequest.formData();
        const file = data.get('file');
        if (!file) {
            return NextResponse.json({ success: false })
        }
    
        console.log('ali', file);
        return NextResponse.json({
            message: "file uploaded successfully",            
            success: true
        })
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false
        })
    }
}
