import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

// GET all portfolio items
export async function GET(req) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.portfolio.findMany({
      select: {
        title: true,
        description: true,
        image: true,
        githubUrl: true,
        liveUrl: true,
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

// POST create a new portfolio item
export async function POST(req) {
  try {
    const data = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.portfolio.create({
      data: data,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

// PUT update a portfolio item by ID (query param)
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({
        status: "fail",
        data: "Portfolio item ID is missing or invalid",
      });
    }

    const data = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.portfolio.update({
      where: { id },
      data: data,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

// DELETE a portfolio item by ID (query param)
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({
        status: "fail",
        data: "Portfolio item ID is missing or invalid",
      });
    }

    const prisma = new PrismaClient();
    const result = await prisma.portfolio.delete({
      where: { id },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
