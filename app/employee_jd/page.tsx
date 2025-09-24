import { Header } from "@/components/header"
import { ResumeSection } from "@/components/employee_jd/resume-section"
import { TechStackSection } from "@/components/employee_jd/tech-stack-section"
import { JobRecommendations } from "@/components/employee_jd/job-recommendations"
import { JobCards } from "@/components/job-cards"

export default function JobSeekerDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ResumeSection />
          <TechStackSection />
        </div>

        
        <JobCards />
        {/* <JobRecommendations /> */}
      </main>
    </div>
  )
}
