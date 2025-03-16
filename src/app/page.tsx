import AppSidebar from "@/components/Sidebar"
import BlogCard from "@/components/BlogCard"  
import prisma from "@/lib/prisma"

export default async function Home() {
  const posts = await prisma.post.findMany({include: {
    user: {
      select: {
        name:true
      }
    }
  }})

  return(
    <div className="flex gap-3 p-6">
    <AppSidebar />
    <div className="flex flex-col gap-5">
      {
        posts.map((post) => (
          <div key={post.id}>
            <BlogCard id={1} title={post.title} content={post.content} author={{name: post?.user?.name}} />
          </div>
          
        ))
      }
    </div>
    
    </div>
    
  )
}
