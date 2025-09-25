import { CareerDashboard } from "@/components/employee_skillfit/career-dashboard"

const dashboard_url = "https://app.powerbi.com/view?r=eyJrIjoiMmU1YzM4MTItOTgzYi00MmI0LWIzMWEtMTcyYjg5MTEwNzY5IiwidCI6IjVmYjI1NmYwLWZiZjItNDBkMi04MWQ1LWJhYzFiMzJjNDE5ZCJ9"
const option = "&navContentPaneEnabled=false"
const dashboard_width = "1050"
const dashboard_height = "2500"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-60 py-8 space-y-8">
        <iframe
          width={dashboard_width}
          height={dashboard_height}
          src={dashboard_url + "&" + option}
          style={{ border: "none" }}
          // allowFullScreen="true"
        >
        </iframe>
        <CareerDashboard />
      </main>
    </div>
  )
}