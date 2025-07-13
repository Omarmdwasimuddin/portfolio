import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";



export async function POST(req,res) {
    
    try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.contact.create({
        data: reqBody
    })

    return NextResponse.json({status: "success", data: result});
    } catch (error) {
        return NextResponse.json({status: "fail", data: error.message});
    }

}