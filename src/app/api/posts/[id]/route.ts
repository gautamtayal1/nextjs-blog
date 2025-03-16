import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(params: {id:string}) {
  const {id} = params
  const post = await prisma.post.findUnique({where:{id}})
  if(!post) return NextResponse.json({message: "post not found", status: 404})
  return NextResponse.json(post)
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, content } = await req.json();
  const post = await prisma.post.update({ where: { id: params.id, userId }, data: { title, content } });

  return NextResponse.json(post);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await prisma.post.delete({ where: { id: params.id, userId } });
  return NextResponse.json({ message: "Post deleted" });
}