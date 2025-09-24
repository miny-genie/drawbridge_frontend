"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Edit3, Mail, Phone, MapPin, Calendar, Star, FileText, Heart, Building } from "lucide-react"

interface UserProfile {
  name: string
  email: string
  phone: string
  location: string
  joinDate: string
  position: string
  avatar: string
}

interface Tier {
  name: string
  color: string
  minXP: number
  maxXP: number
  icon: string
}

interface ProfileSectionProps {
  userProfile: UserProfile | null
  setUserProfile: (profile: UserProfile) => void
  currentTier: Tier
  totalXP: number
  xpForNextLevel: number
  xpProgress: number
  emojiOptions: string[]
}

export function ProfileSection({
  userProfile,
  setUserProfile,
  currentTier,
  totalXP,
  xpForNextLevel,
  xpProgress,
  emojiOptions,
}: ProfileSectionProps) {
  if (!userProfile) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            프로필 정보
            <Button size="sm" variant="outline">
              <Edit3 className="mr-2 h-4 w-4" />
              편집
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-6">
            <div className="space-y-4">
              <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center text-4xl border-2 border-gray-200">
                {userProfile.avatar}
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-center">아바타 변경</p>
                <div className="grid grid-cols-4 gap-2">
                  {emojiOptions.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => setUserProfile({ ...userProfile, avatar: emoji })}
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-lg hover:bg-gray-100 ${
                        userProfile.avatar === emoji ? "bg-primary" : "bg-gray-50"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-balance">{userProfile.name}</h2>
                <p className="text-muted-foreground">{userProfile.position}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{currentTier.name} 티어</span>
                  <Badge className="bg-primary text-black">{totalXP} XP</Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>다음 레벨까지</span>
                    <span>{xpForNextLevel} XP</span>
                  </div>
                  <Progress value={xpProgress} className="h-2" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{userProfile.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{userProfile.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{userProfile.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">가입일: {userProfile.joinDate}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">지원한 공고</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">면접 예정</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Calendar className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">관심 공고</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Heart className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applications */}
      <Card>
        <CardHeader>
          <CardTitle>최근 지원 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">네이버 - 프론트엔드 개발자</p>
                  <p className="text-sm text-muted-foreground">지원일: 2024.03.15</p>
                </div>
              </div>
              <Badge className="bg-yellow-500 text-black">서류 심사 중</Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">카카오 - 백엔드 개발자</p>
                  <p className="text-sm text-muted-foreground">지원일: 2024.03.12</p>
                </div>
              </div>
              <Badge variant="secondary">면접 대기</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Interviews */}
      <Card>
        <CardHeader>
          <CardTitle>예정된 면접</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">토스 - 1차 기술면접</p>
                  <p className="text-sm text-muted-foreground">2024.03.20 14:00</p>
                </div>
              </div>
              <Badge variant="outline">화상면접</Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium">라인 - 최종면접</p>
                  <p className="text-sm text-muted-foreground">2024.03.22 10:00</p>
                </div>
              </div>
              <Badge variant="outline">현장면접</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
