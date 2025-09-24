"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  BarChart3,
  Eye,
  Bookmark,
  BookmarkCheck,
  History,
  Briefcase,
  CheckCircle,
  Send,
  User
} from "lucide-react"
import { SkillAnalysisOverlay } from "./skill-analysis-overlay"
import { CandidateProfileModal } from "./candidate-profile-modal"
import type { Candidate } from "@/types/company_monitor/candidate"

interface CandidateCardProps {
  candidate: Candidate
  onToggleBookmark?: (candidateId: string) => void
}

export function CandidateCard({ candidate, onToggleBookmark }: CandidateCardProps) {
  const [showSkillAnalysis, setShowSkillAnalysis] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [showOfferPopup, setShowOfferPopup] = useState(false)

  const skills = candidate.skills_past || candidate.skfn_current || []

  const handleViewProfile = () => {
    setShowProfileModal(true)
  }

  const handleBookmark = () => {
    if (onToggleBookmark) {
      onToggleBookmark(candidate.id)
    }
  }

  const handleSendOffer = () => {
    console.log(`Sending offer to ${candidate.employee_name}`)
    setShowOfferPopup(true)
    setTimeout(() => {
      setShowOfferPopup(false)
    }, 2000)
  }

  const maxCount = Math.min(candidate.skills_current.length, 5)
  const sum = candidate.skfn_current
    .slice(0, maxCount)
    .reduce((acc, cur) => acc + Number(cur), 0);
  const avg = Math.round((sum / maxCount) * 100) / 100;
  const posting_id_all = candidate.posting_id_all.split(";")

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow relative">
        <CardContent className="p-6">
          {showOfferPopup && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">오퍼 전송 완료</h3>
                  <p className="text-sm text-gray-600">{candidate.employee_name}님에게 오퍼를 보냈습니다.</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-12 gap-6">
            {/* Profile Section */}
            <div className="col-span-3 flex flex-col items-center">
              <Avatar className="h-20 w-20 mb-3">
                <AvatarImage src={candidate.avatar || candidate.photo || "/placeholder.svg"} alt={candidate.employee_name} />
                <AvatarFallback className="text-lg">
                  {candidate.employee_name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{candidate.employee_name}</h3>
              <p className="text-sm text-gray-600 text-center">{candidate.job_category_kor}</p>
            </div>

            {/* Basic Info Section */}
            <div className="col-span-4 space-y-3">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 border-b border-gray-200 pb-1">기본 정보</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{candidate.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>{candidate.career}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="h-4 w-4 text-gray-400" />
                    <span>{candidate.salary || candidate.age + "세 " + candidate.gender}</span>
                  </div>
                </div>
              </div>

              {/* Applied Job Posting */}
              {candidate.posting_id_all && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700 border-b border-gray-200 pb-1">지원 공고</h4>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-blue-500" />
                    <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                      {candidate.posting_title_s}
                    </Badge>
                  </div>
                </div>
              )}
            </div>

            {/* Skills & Growth Section */}
            <div className="col-span-3 space-y-3">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 border-b border-gray-200 pb-1">기술 스택 & 숙련도</h4>
                <div className="space-y-2">
                  
                  {candidate.skfn_current?.slice(0, maxCount).map((skfn, idx) => {
                    // const proficiencyPercentage = Math.round((Number(skfn) / 10) * 100)
                    const proficiencyPercentage = Number(skfn)
                    const growthRate = Number(skfn)

                    return (
                      <div key={candidate.skills_current[idx]} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-700">{candidate.skills_current[idx]}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-600">{proficiencyPercentage}%</span>
                            <span className="text-xs text-green-600 font-medium">+{growthRate}%</span>
                          </div>
                        </div>
                      </div>
                    )
                  }) || (
                    // Fallback for candidates without detailed proficiency data
                    <div className="flex flex-wrap gap-1.5">
                      {skills.slice(0, 6).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {skills.length > 6 && (
                        <Badge variant="outline" className="text-xs">
                          +{skills.length - 6}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-green-600 font-medium">평균 {avg || 0}% 성장률</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="col-span-2 flex flex-col gap-2">
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 bg-transparent w-full justify-start text-xs"
                  onMouseEnter={() => setShowSkillAnalysis(true)}
                  onMouseLeave={() => setShowSkillAnalysis(false)}
                >
                  <BarChart3 className="h-3 w-3" />
                  분석
                </Button>
                {showSkillAnalysis && <SkillAnalysisOverlay candidate={candidate} position="left" />}
              </div>

              <Button
                size="sm"
                className="flex items-center gap-1 w-full justify-start text-xs"
                onClick={handleViewProfile}
              >
                <Eye className="h-3 w-3" />
                프로필
              </Button>

              <Button
                variant="outline"
                size="sm"
                className={`flex items-center gap-1 w-full justify-start transition-colors text-xs ${
                  candidate.isBookmarked ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-transparent"
                }`}
                onClick={handleBookmark}
              >
                {candidate.isBookmarked ? <BookmarkCheck className="h-3 w-3" /> : <Bookmark className="h-3 w-3" />}
                {candidate.isBookmarked ? "저장됨" : "저장"}
              </Button>

              <Button
                size="sm"
                className="flex items-center gap-1 w-full justify-start bg-green-600 hover:bg-green-700 text-white text-xs"
                onClick={handleSendOffer}
              >
                <Send className="h-3 w-3" />
                오퍼
              </Button>
            </div>
          </div>

          {/* Previous Applications Section - Full Width */}
          {posting_id_all && posting_id_all.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <div className="flex items-center gap-1 shrink-0">
                  <History className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">이전 지원 내역</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {posting_id_all.slice(0, 4).map((app, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        {app}
                      </Badge>
                      <Badge
                        variant={
                          app === "최종합격" ? "default" : app === "불합격" ? "destructive" : "secondary"
                        }
                        className="text-xs px-1.5 py-0.5"
                      >
                        {app}
                      </Badge>
                    </div>
                  ))}
                  {posting_id_all.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{posting_id_all.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <CandidateProfileModal
        candidate={candidate}
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </>
  )
}
