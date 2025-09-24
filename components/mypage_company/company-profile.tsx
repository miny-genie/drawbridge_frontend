import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CompanyProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>회사 정보</CardTitle>
        <CardDescription>회사 프로필과 채용 정보를 관리하세요</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">회사명</label>
            <p className="text-lg">테크 이노베이션</p>
          </div>
          <div>
            <label className="text-sm font-medium">업종</label>
            <p className="text-lg">IT/소프트웨어</p>
          </div>
          <div>
            <label className="text-sm font-medium">직원 수</label>
            <p className="text-lg">50-100명</p>
          </div>
          <div>
            <label className="text-sm font-medium">설립년도</label>
            <p className="text-lg">2018년</p>
          </div>
        </div>
        <div className="pt-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">프로필 수정</Button>
        </div>
      </CardContent>
    </Card>
  )
}
