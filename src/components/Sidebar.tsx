"use client"

import { Calendar, Home, Inbox} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { UserButton} from "@clerk/nextjs"
import ModeToggle from "./theme-toggle"


// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: Inbox,
  },
  {
    title: "Post",
    url: "/post",
    icon: Calendar,
  }
  // {
  //   title: "Search",
  //   url: "#",
  //   icon: Search,
  // },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  // },
]

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex justify-between items-center pr-2 ">
          <SidebarGroupLabel className="font-sans font-black">U Blog</SidebarGroupLabel>
          <div className="flex gap-2">
            <ModeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => ( 
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  
                </SidebarMenuItem>
              ))}
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SignedOut>
      <Button className="mb-3 mx-3" asChild>
        <SignInButton/>
      </Button>
      </SignedOut>
      <Button className="mb-3 mx-3 p-10" asChild>
        
      </Button>
      
    </Sidebar>
  )
}
