import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";



export async function POST(req,res) {
    
    try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.newsLetter.create({
        data:reqBody
    })

    return NextResponse.json({status: "success", data: result});
    } catch (error) {
        return NextResponse.json({status: "fail", data: error.message});
    }

}