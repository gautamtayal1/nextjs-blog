
import AppSidebar from "@/components/Sidebar"
import BlogCard from "@/components/BlogCard"  
export default function Home() {
  return(
    <div className="flex gap-3 p-6">
    <AppSidebar />
    <div className="flex flex-col gap-5">
      <BlogCard id={1} title="My First Blog" content="This is my first blog" author={{name: "John Doe"}} />
      <BlogCard id={1} title="My First Blog" content="This is my first blog" author={{name: "John Doe"}} />
      <BlogCard id={1} title="My First Blog" content="This is my first blog" author={{name: "John Doe"}} />
      <BlogCard id={1} title="My First Blog" content="This is my first blog" author={{name: "John Doe"}} />
    </div>
    
    </div>
    
  )
}
