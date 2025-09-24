import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface Interview {
  id: number
  candidate: string
  position: string
  date: string
  time: string
}

interface InterviewScheduleProps {
  interviews: Interview[]
}

export function InterviewSchedule({ interviews }: InterviewScheduleProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>예정된 면접</CardTitle>
        <CardDescription>면접 일정을 확인하고 관리하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {interviews.map((interview) => (
            <div key={interview.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">{interview.candidate}</h3>
                  <p className="text-sm text-muted-foreground">{interview.position}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{interview.date}</p>
                <p className="text-sm text-muted-foreground">{interview.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
