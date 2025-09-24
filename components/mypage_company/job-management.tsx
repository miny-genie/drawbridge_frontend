"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Edit, Trash2 } from "lucide-react"
import type { JSX } from "react" // Added import for JSX

interface Job {
  id: number
  title: string
  status: string
  applicants: number
  posted: string
}

interface JobManagementProps {
  jobs: Job[]
  toggleJobStatus: (jobId: number) => void
  getStatusBadge: (status: string) => JSX.Element
}

export function JobManagement({ jobs, toggleJobStatus, getStatusBadge }: JobManagementProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>채용 공고 목록</CardTitle>
        <CardDescription>등록된 모든 채용 공고를 관리하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-muted-foreground">
                  등록일: {job.posted} | 지원자: {job.applicants}명
                </p>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(job.status)}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleJobStatus(job.id)}
                  className={
                    job.status === "active" ? "text-red-600 hover:text-red-700" : "text-green-600 hover:text-green-700"
                  }
                >
                  {job.status === "active" ? "비활성화" : "활성화"}
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
