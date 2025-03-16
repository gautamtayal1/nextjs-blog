import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const {userId} = auth()
  if(!userId) return NextResponse.json({error: "Unauthorized"}, {status: 401})
  const user = await prisma.user.findUnique({where: {id : userId}})
  return Response.json(user)
}

export async function PATCH(request: Request) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name } = await request.json();

  const user = await prisma.user.update({where: {id: userId}, data: {name}})
  return NextResponse.json(user)
}


