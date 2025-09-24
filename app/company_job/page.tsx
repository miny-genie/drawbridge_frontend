import { JobPostingForm } from "@/components/company_job/job-posting-form"
import { ComparisonDashboard } from "@/components/company_job/comparison-dashboard"
import { AnalysisReports } from "@/components/company_job/analysis-reports"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">채용 공고 관리 시스템</h1>
          <p className="text-muted-foreground mt-2">
            AI 기반 경쟁사 분석과 개선 추천으로 더 나은 채용 공고를 작성하세요
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Job Posting Form */}
          <div className="xl:col-span-2">
            <JobPostingForm />
          </div>

          {/* Analysis Reports */}
          <div className="xl:col-span-1">
            <AnalysisReports />
          </div>
        </div>

        {/* Comparison Dashboard */}
        <div className="mt-12">
          <ComparisonDashboard />
        </div>
      </main>
    </div>
  )
}
