import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Analytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>월별 지원자 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            차트 영역 (실제 구현시 Recharts 사용)
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>채용 성공률</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>전체 지원자</span>
              <span className="font-bold">156명</span>
            </div>
            <div className="flex justify-between">
              <span>면접 진행</span>
              <span className="font-bold">45명 (28.8%)</span>
            </div>
            <div className="flex justify-between">
              <span>최종 채용</span>
              <span className="font-bold">12명 (7.7%)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
