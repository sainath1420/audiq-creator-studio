import { Info, Search, BarChart3, Users, Tag, Map, TrendingUp, Target, MessageCircle } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const items = [
  { title: "About Project", url: "/", icon: Info },
  { title: "Search", url: "/search", icon: Search },
  { title: "Insights", url: "/insights", icon: BarChart3 },
  { title: "Demographics", url: "/demographics", icon: Users },
  { title: "Taste Analysis", url: "/taste", icon: Tag },
  { title: "Location Trends", url: "/location", icon: Map },
  { title: "Heatmap", url: "/heatmap", icon: TrendingUp },
  { title: "Recommendations", url: "/recommendations", icon: Target },
  { title: "Chat", url: "/chat", icon: MessageCircle },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/20 text-primary border-primary/30 glow-primary" 
      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-smooth"

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar border-sidebar-border">
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold text-gradient-primary">Audience IQ</h1>
                <p className="text-xs text-muted-foreground">Creator Insights</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-6 py-2">
            Analytics
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-3">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mb-1">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}