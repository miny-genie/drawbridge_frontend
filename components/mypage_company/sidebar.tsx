"use client"

import { Button } from "@/components/ui/button"
import { Building2, Users, FileText, Calendar, TrendingUp, Bell, Settings, BarChart3 } from "lucide-react"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Building2 className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold text-sidebar-foreground">기업 채용관리</h1>
        </div>

        <nav className="space-y-2">
          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("overview")}
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            대시보드
          </Button>
          <Button
            variant={activeTab === "jobs" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("jobs")}
          >
            <FileText className="mr-2 h-4 w-4" />
            공고 관리
          </Button>
          <Button
            variant={activeTab === "applicants" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("applicants")}
          >
            <Users className="mr-2 h-4 w-4" />
            지원자 관리
          </Button>
          <Button
            variant={activeTab === "interviews" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("interviews")}
          >
            <Calendar className="mr-2 h-4 w-4" />
            면접 일정
          </Button>
          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("profile")}
          >
            <Building2 className="mr-2 h-4 w-4" />
            회사 프로필
          </Button>
          <Button
            variant={activeTab === "analytics" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("analytics")}
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            채용 분석
          </Button>
        </nav>
      </div>

      <div className="absolute bottom-0 w-64 p-6 border-t border-sidebar-border">
        <Button variant="ghost" className="w-full justify-start">
          <Bell className="mr-2 h-4 w-4" />
          알림 설정
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          설정
        </Button>
      </div>
    </div>
  )
}
