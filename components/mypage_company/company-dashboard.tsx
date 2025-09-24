"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

import { Sidebar } from "./sidebar"
import { DashboardStats } from "./dashboard-stats"
import { RecentJobs } from "./recent-jobs"
import { RecentApplicants } from "./recent-applicants"
import { UpcomingInterviews } from "./upcoming-interviews"
import { JobManagement } from "./job-management"
import { ApplicantManagement } from "./applicant-management"
import { InterviewSchedule } from "./interview-schedule"
import { CompanyProfile } from "./company-profile"
import { Analytics } from "./analytics"
import { getStatusBadge } from "./utils"

export function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = {
    totalJobs: 12,
    activeJobs: 8,
    totalApplicants: 156,
    newApplicants: 23,
    scheduledInterviews: 7,
    hiredThisMonth: 3,
  }

  const [jobs, setJobs] = useState([
    { id: 1, title: "프론트엔드 개발자", status: "active", applicants: 45, posted: "2024-01-15" },
    { id: 2, title: "백엔드 개발자", status: "active", applicants: 32, posted: "2024-01-12" },
    { id: 3, title: "UI/UX 디자이너", status: "inactive", applicants: 28, posted: "2024-01-10" },
    { id: 4, title: "데이터 분석가", status: "active", applicants: 19, posted: "2024-01-08" },
  ])

  const toggleJobStatus = (jobId: number) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: job.status === "active" ? "inactive" : "active" } : job,
      ),
    )
  }

  const recentJobs = jobs.filter((job) => job.status === "active")

  const recentApplicants = [
    {
      id: 1,
      name: "김민수",
      position: "프론트엔드 개발자",
      status: "pending",
      appliedDate: "2024-01-16",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "이지영",
      position: "백엔드 개발자",
      status: "interview",
      appliedDate: "2024-01-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "박준호",
      position: "UI/UX 디자이너",
      status: "hired",
      appliedDate: "2024-01-14",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "최수진",
      position: "데이터 분석가",
      status: "rejected",
      appliedDate: "2024-01-13",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const upcomingInterviews = [
    { id: 1, candidate: "김민수", position: "프론트엔드 개발자", date: "2024-01-18", time: "14:00" },
    { id: 2, candidate: "이지영", position: "백엔드 개발자", date: "2024-01-18", time: "16:00" },
    { id: 3, candidate: "정현우", position: "프론트엔드 개발자", date: "2024-01-19", time: "10:00" },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-balance">채용 대시보드</h2>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />새 공고 등록
              </Button>
            </div>

            <DashboardStats stats={stats} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentJobs jobs={jobs} getStatusBadge={getStatusBadge} />
              <RecentApplicants applicants={recentApplicants} getStatusBadge={getStatusBadge} />
            </div>

            <UpcomingInterviews interviews={upcomingInterviews} />
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">공고 관리</h2>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />새 공고 등록
              </Button>
            </div>

            <JobManagement jobs={jobs} toggleJobStatus={toggleJobStatus} getStatusBadge={getStatusBadge} />
          </div>
        )}

        {activeTab === "applicants" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">지원자 관리</h2>
            <ApplicantManagement applicants={recentApplicants} getStatusBadge={getStatusBadge} />
          </div>
        )}

        {activeTab === "interviews" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">면접 일정</h2>
            <InterviewSchedule interviews={upcomingInterviews} />
          </div>
        )}

        {activeTab === "profile" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">회사 프로필</h2>
            <CompanyProfile />
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">채용 분석</h2>
            <Analytics />
          </div>
        )}
      </div>
    </div>
  )
}
