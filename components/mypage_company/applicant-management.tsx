import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Star } from "lucide-react"
import type { JSX } from "react" // Import JSX to fix the lint error

interface Applicant {
  id: number
  name: string
  position: string
  status: string
  appliedDate: string
  avatar: string
}

interface ApplicantManagementProps {
  applicants: Applicant[]
  getStatusBadge: (status: string) => JSX.Element
}

export function ApplicantManagement({ applicants, getStatusBadge }: ApplicantManagementProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>지원자 목록</CardTitle>
        <CardDescription>모든 지원자의 현황을 확인하고 관리하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {applicants.map((applicant) => (
            <div key={applicant.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={applicant.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{applicant.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{applicant.name}</h3>
                  <p className="text-sm text-muted-foreground">{applicant.position}</p>
                  <p className="text-xs text-muted-foreground">지원일: {applicant.appliedDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(applicant.status)}
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Star className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
