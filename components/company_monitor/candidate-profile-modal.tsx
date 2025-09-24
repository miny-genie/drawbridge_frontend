"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  History,
  Award,
  BookOpen,
  Briefcase,
} from "lucide-react"
import type { Candidate } from "@/types/candidate"

interface CandidateProfileModalProps {
  candidate: Candidate
  isOpen: boolean
  onClose: () => void
}

export function CandidateProfileModal({ candidate, isOpen, onClose }: CandidateProfileModalProps) {
  const skills = candidate.skills || candidate.skillStack || []

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>지원자 프로필</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={candidate.avatar || candidate.photo || "/placeholder.svg"} alt={candidate.name} />
              <AvatarFallback className="text-xl">
                {candidate.employee_name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{candidate.name}</h2>
                  <p className="text-lg text-gray-600 mt-1">{candidate.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {candidate.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {candidate.experience}
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  {candidate.salary || candidate.salaryRange}
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {candidate.employee_name.toLowerCase().replace(" ", ".")}@email.com
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  010-1234-5678
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Proficiency */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                기술 스택 및 숙련도
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill) => {
                  const proficiency = candidate.skillProficiency?.find((p) => p.skill === skill)
                  return (
                    <div key={skill} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <Badge variant="secondary">{skill}</Badge>
                      {proficiency && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{proficiency.level}/5</span>
                          {proficiency.improvementRate > 0 && (
                            <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />+{proficiency.improvementRate}%
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Previous Applications */}
          {candidate.previousApplications && candidate.previousApplications.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5" />
                  이전 지원 내역
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {candidate.previousApplications.map((app, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{app.jobTitle}</p>
                        <p className="text-sm text-gray-600">{app.company}</p>
                      </div>
                      <Badge
                        variant={
                          app.status === "최종합격" ? "default" : app.status === "불합격" ? "destructive" : "secondary"
                        }
                      >
                        {app.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  학력
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">{candidate.education || "서울대학교"}</p>
                  <p className="text-sm text-gray-600">컴퓨터공학과</p>
                  <p className="text-sm text-gray-600">2018 - 2022</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  경력 개선도
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  <span className="text-2xl font-bold text-green-600">{candidate.improvement || 0}%</span>
                  <span className="text-sm text-gray-600">향상</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">지난 6개월 대비</p>
              </CardContent>
            </Card>
          </div>

          {/* Links */}
          <Card>
            <CardHeader>
              <CardTitle>링크</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                  <Globe className="h-4 w-4" />
                  Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
