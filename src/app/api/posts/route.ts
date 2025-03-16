import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({include: {
    user: {
      select: {
        name:true
      }
    }
  }})
  return NextResponse.json(posts)
}

export async function POST(req: Request) {
  const {userId} = auth()
  if(!userId) return NextResponse.json({message: "unauthorizes"}, {status:401})

  const {title, content} = req.json()
  const newPost = await prisma.post.create({
    data:{
      userId, title, content
    }
  })
  return NextResponse.json(newPost, {status: 201})
}