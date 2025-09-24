"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import type { Candidate } from "@/types/candidate"

interface SkillAnalysisOverlayProps {
  candidate: Candidate
  position?: "left" | "right"
}

export function SkillAnalysisOverlay({ candidate, position = "right" }: SkillAnalysisOverlayProps) {
  const skillData = [
    { name: "React", past: 85, current: 96, required: 85 },
    { name: "TypeScript", past: 80, current: 92, required: 80 },
    { name: "Node.js", past: 75, current: 88, required: 75 },
    { name: "Problem Solving", past: 75, current: 82, required: 90 },
    { name: "Code Quality", past: 77, current: 99, required: 70 },
    { name: "Team Collaboration", past: 89, current: 100, required: 88 },
  ]

  const comparisonData = [
    { skill: "React", previous: 85, current: 96 },
    { skill: "TypeScript", previous: 80, current: 92 },
    { skill: "Node.js", previous: 75, current: 88 },
  ]

  const progressionData = [
    { month: "Jan", React: 85, TypeScript: 80, "Node.js": 75 },
    { month: "Feb", React: 87, TypeScript: 82, "Node.js": 78 },
    { month: "Mar", React: 90, TypeScript: 85, "Node.js": 82 },
    { month: "Apr", React: 93, TypeScript: 88, "Node.js": 85 },
    { month: "May", React: 95, TypeScript: 90, "Node.js": 87 },
    { month: "Jun", React: 96, TypeScript: 92, "Node.js": 88 },
  ]

  return (
    <div
      className={`absolute top-full mt-2 w-[1200px] z-50 bg-white border rounded-lg shadow-xl p-6 ${
        position === "left" ? "right-0" : "left-0"
      }`}
    >
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column - Skill Bars */}
        <div className="space-y-6">
          {/* Skill Summary */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">96%</div>
              <div className="text-sm text-green-600">React</div>
              <div className="text-xs text-green-600">+11% improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">92%</div>
              <div className="text-sm text-blue-600">TypeScript</div>
              <div className="text-xs text-green-600">+12% improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">88%</div>
              <div className="text-sm text-purple-600">Node.js</div>
              <div className="text-xs text-green-600">+13% improvement</div>
            </div>
          </div>

          {/* Current vs Previous Assessment */}
          <div>
            <h4 className="font-medium mb-4">Current vs Previous Assessment</h4>
            <div className="space-y-3">
              {skillData.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex gap-4 text-xs">
                      <span className="text-gray-500">Past: {skill.past}%</span>
                      <span className="text-blue-600">Current: {skill.current}%</span>
                      <span className="text-red-600">Required: {skill.required}%</span>
                    </div>
                  </div>
                  <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gray-400 rounded-full opacity-50"
                      style={{ width: `${skill.past}%` }}
                    />
                    <div className="absolute inset-0 bg-blue-500 rounded-full" style={{ width: `${skill.current}%` }} />
                    <div className="absolute top-0 bottom-0 w-0.5 bg-red-500" style={{ left: `${skill.required}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Charts */}
        <div className="space-y-6">
          {/* Bar Chart */}
          <div>
            <h4 className="font-medium mb-3">Current vs Previous Assessment</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="skill" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="previous" fill="#FFA500" name="Previous" />
                  <Bar dataKey="current" fill="#FFB84D" name="Current" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Line Chart */}
          <div>
            <h4 className="font-medium mb-3">Skill Progression Over Time</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[70, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="React" stroke="#FFA500" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="TypeScript" stroke="#FF8C42" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="Node.js" stroke="#20B2AA" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
