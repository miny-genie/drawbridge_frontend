"use client"
import { Applications } from "./applications"
import { Favorites } from "./favorites"
import { ResumeManagement } from "./resume-management"
import { Interviews } from "./interviews"
import { Companies } from "./companies"
import { Goals } from "./goals"
import { TodoList } from "./todo-list"
import { Challenges } from "./challenges"
import { Settings } from "./settings"
import { NotificationSettings } from "./notification-settings"

interface MainContentProps {
  activeTab: string
  notifications: boolean
  setNotifications: (value: boolean) => void
  privacy: boolean
  setPrivacy: (value: boolean) => void
  userProfile: {
    name: string
    email: string
    avatar: string
    tier: string
    xp: number
    nextLevelXp: number
  }
  setUserProfile: (profile: any) => void
  todos: Array<{ id: number; text: string; completed: boolean }>
  setTodos: (todos: any) => void
  tiers: Array<{
    name: string
    color: string
    minXP: number
    maxXP: number
    icon: string
  }>
  currentTier: {
    name: string
    color: string
    minXP: number
    maxXP: number
    icon: string
  }
  totalXP: number
  xpForNextLevel: number
  xpProgress: number
}

export function MainContent({
  activeTab,
  notifications,
  setNotifications,
  privacy,
  setPrivacy,
  userProfile,
  setUserProfile,
  todos,
  setTodos,
  tiers,
  currentTier,
  totalXP,
  xpForNextLevel,
  xpProgress,
}: MainContentProps) {
  if (activeTab === "profile") {
    return null
  }

  if (activeTab === "applications") {
    return <Applications />
  }

  if (activeTab === "favorites") {
    return <Favorites />
  }

  if (activeTab === "resume") {
    return <ResumeManagement />
  }

  if (activeTab === "interviews") {
    return <Interviews />
  }

  if (activeTab === "companies") {
    return <Companies />
  }

  if (activeTab === "goals") {
    return <Goals />
  }

  if (activeTab === "todos") {
    return <TodoList todos={todos} setTodos={setTodos} />
  }

  if (activeTab === "challenges") {
    return (
      <Challenges
        tiers={tiers}
        currentTier={currentTier}
        totalXP={totalXP}
        xpForNextLevel={xpForNextLevel}
        xpProgress={xpProgress}
      />
    )
  }

  if (activeTab === "settings") {
    return (
      <Settings
        notifications={notifications}
        setNotifications={setNotifications}
        privacy={privacy}
        setPrivacy={setPrivacy}
      />
    )
  }

  if (activeTab === "notifications") {
    return <NotificationSettings />
  }

  return null
}
