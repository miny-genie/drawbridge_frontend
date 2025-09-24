"use client"

import { CandidateCard } from "./candidate-card"
import type { Candidate } from "@/types/company_monitor/candidate"

interface CandidateListProps {
  candidates: Candidate[]
  onToggleBookmark: (candidateId: string) => void
}

export function CandidateList({ candidates, onToggleBookmark }: CandidateListProps) {
  return (
    <div className="space-y-4">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          onToggleBookmark={onToggleBookmark}
        />
      ))}
    </div>
  )
}
