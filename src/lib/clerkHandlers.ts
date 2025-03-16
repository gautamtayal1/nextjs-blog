import prisma from "./prisma";

export async function handleClerkUserEvent(payload: any) {
  const {id, email_addresses, first_name, last_name} = payload.data
  const email = email_addresses?.[0]?.email_address

  try {
    if(payload.type === "user.created"){
      await prisma.user.create({
        data: {
          name: first_name + " " + last_name,
          id,
          email
        }
      })
    }else if (payload.type === "user.updated"){
      await prisma.user.update({
        where: {
          id
        }, data: {
          id, email, 
          name: first_name + " " + last_name,
        }
      })
    } else if (payload.type === "user.deleted"){
      await prisma.user.delete({
        where: {
          id
        }
      })
    }
  } catch (error) {
    console.error("db operation failed: " + error)
    throw new Error("db operation failed")
  }
}