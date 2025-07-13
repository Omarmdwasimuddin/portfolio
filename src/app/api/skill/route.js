import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

// GET: Get all skills
export async function GET(req) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.skill.findMany({
      select: { name: true, image: true },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

// POST: Create new skill
export async function POST(req) {
  try {
    const data = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.skill.create({
      data: data,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

// PUT: Update skill by ID (via query param)
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({
        status: "fail",
        data: "Skill ID is missing or invalid",
      });
    }

    const data = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.skill.update({
      where: { id },
      data: data,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

// DELETE: Delete skill by ID (via query param)
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({
        status: "fail",
        data: "Skill ID is missing or invalid",
      });
    }

    const prisma = new PrismaClient();
    const result = await prisma.skill.delete({
      where: { id },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
