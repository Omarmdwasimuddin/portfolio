import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";



export async function GET(req,res) {
    
    try {
    const prisma = new PrismaClient();
    const result = await prisma.hero.findMany({
        select:{video:true,description:true}
    })

    return NextResponse.json({status: "success", data: result});
    } catch (error) {
        return NextResponse.json({status: "fail", data: error.message});
    }

}

export async function POST(req,res) {
    
    try {
    const resBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.hero.create({
        data:resBody
    })

    return NextResponse.json({status: "success", data: result});
    } catch (error) {
        return NextResponse.json({status: "fail", data: error.message});
    }

}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({
        status: "fail",
        data: "Blog post ID is missing or invalid",
      });
    }

    const prisma = new PrismaClient();
    const result = await prisma.hero.delete({
      where: { id },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({
        status: "fail",
        data: "Blog post ID is missing or invalid",
      });
    }

    const updateData = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.hero.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}