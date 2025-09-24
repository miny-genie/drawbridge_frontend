import type { Candidate } from "@/types/company_monitor/candidate"
import { headers } from "next/headers";

// const MOCK_DATA = {
//   surnames: [
//     "김",
//     "이",
//     "박",
//     "최",
//     "정",
//     "강",
//     "윤",
//     "임",
//     "송",
//     "한",
//     "조",
//     "배",
//     "신",
//     "오",
//     "류",
//     "홍",
//     "신",
//     "조",
//     "배",
//     "홍",
//   ],
//   givenNames: [
//     "민수",
//     "지영",
//     "수진",
//     "동훈",
//     "하늘",
//     "태현",
//     "서연",
//     "준호",
//     "미래",
//     "승우",
//     "예린",
//     "현석",
//     "다은",
//     "건우",
//     "채원",
//     "지훈",
//     "소영",
//     "준영",
//     "서현",
//     "민호",
//   ],
//   titles: [
//     "프론트엔드 개발자",
//     "백엔드 개발자",
//     "풀스택 개발자",
//     "모바일 개발자",
//     "데이터 엔지니어",
//     "AI 엔지니어",
//     "DevOps 엔지니어",
//     "UI/UX 디자이너",
//     "게임 개발자",
//     "보안 엔지니어",
//     "QA 엔지니어",
//     "블록체인 개발자",
//     "프로덕트 매니저",
//     "임베디드 개발자",
//     "클라우드 아키텍트",
//     "데이터 사이언티스트",
//   ],
//   locations: [
//     "서울",
//     "부산",
//     "대구",
//     "인천",
//     "광주",
//     "대전",
//     "울산",
//     "경기",
//     "강원",
//     "충북",
//     "충남",
//     "전북",
//     "전남",
//     "경북",
//     "경남",
//     "제주",
//   ],
//   skillSets: [
//     ["React", "TypeScript", "Node.js"],
//     ["Python", "Django", "PostgreSQL"],
//     ["Vue.js", "JavaScript", "CSS"],
//     ["Java", "Spring", "AWS"],
//     ["React Native", "iOS", "Android"],
//     ["Python", "Spark", "Kafka"],
//     ["TensorFlow", "PyTorch", "MLOps"],
//     ["Kubernetes", "AWS", "Terraform"],
//     ["UI/UX", "Figma", "React"],
//     ["Unity", "C#", "Unreal"],
//     ["Cybersecurity", "Penetration Testing", "SIEM"],
//     ["Selenium", "Jest", "Cypress"],
//     ["Solidity", "Web3", "Ethereum"],
//     ["Product Strategy", "Analytics", "Agile"],
//     ["C/C++", "Arduino", "Raspberry Pi"],
//     ["AWS", "Azure", "GCP"],
//     ["Python", "R", "Machine Learning"],
//   ],
//   experiences: ["신입", "1년", "2년", "3년", "4년", "5년", "6년", "7년", "8년", "9년", "10년+"],
//   salaries: [
//     "2500만원",
//     "2800만원",
//     "3200만원",
//     "3800만원",
//     "4200만원",
//     "4800만원",
//     "5200만원",
//     "5800만원",
//     "6200만원",
//     "6800만원",
//     "7200만원",
//     "7800만원",
//   ],
//   availabilities: ["즉시 가능", "2주 내", "1개월 내", "기회 열려있음"],
//   educations: ["고등학교", "전문학사", "학사", "석사", "박사", "부트캠프", "MBA"],
//   avatars: [
//     "/professional-woman-developer.png",
//     "/professional-man-developer.png",
//     "/professional-woman-designer.png",
//     "/professional-engineer.png",
//   ],
//   jobPostings: [
//     "시니어 프론트엔드 개발자 (React/TypeScript)",
//     "백엔드 개발자 (Node.js/Python)",
//     "풀스택 개발자 (React/Node.js)",
//     "모바일 앱 개발자 (React Native)",
//     "데이터 엔지니어 (Python/Spark)",
//     "AI/ML 엔지니어 (TensorFlow/PyTorch)",
//     "DevOps 엔지니어 (AWS/Kubernetes)",
//     "UI/UX 디자이너 (Figma/React)",
//     "게임 개발자 (Unity/C#)",
//     "보안 엔지니어 (Cybersecurity)",
//     "QA 엔지니어 (자동화 테스트)",
//     "블록체인 개발자 (Solidity/Web3)",
//     "프로덕트 매니저 (B2B SaaS)",
//     "임베디드 개발자 (C/C++/Arduino)",
//     "클라우드 아키텍트 (AWS/Azure)",
//     "데이터 사이언티스트 (Python/R)",
//   ],
//   companies: ["네이버", "카카오", "토스", "쿠팡", "배달의민족", "라인", "당근마켓"],
//   applicationStatuses: ["최종합격", "불합격", "서류통과", "면접진행"],
// }

// const skillLevels: ("Junior" | "Mid" | "Senior")[] = ["Junior", "Mid", "Senior"]

// function getRandomItem<T>(array: T[]): T {
//   return array[Math.floor(Math.random() * array.length)]
// }

export async function generateMockCandidates(count = 10000): Promise<Candidate[]> {
  // const candidates: Candidate[] = []

  // for (let i = 1; i <= count; i++) {
  //   const surname = getRandomItem(MOCK_DATA.surnames)
  //   const givenName = getRandomItem(MOCK_DATA.givenNames)
  //   const skillLevel = getRandomItem(skillLevels)
  //   const titlePrefix = skillLevel === "Junior" ? "주니어" : skillLevel === "Mid" ? "미드레벨" : "시니어"
  //   const selectedSkillSet = getRandomItem(MOCK_DATA.skillSets)

  //   const skillProficiencies = selectedSkillSet.map((skill) => {
  //     const baseProficiency = skillLevel === "Junior" ? 2 : skillLevel === "Mid" ? 3 : 4
  //     const proficiency = Math.min(5, baseProficiency + Math.floor(Math.random() * 2))
  //     const growthRate = Math.floor(Math.random() * 25) + 5 // 5-30% growth rate
  //     const monthsExperience =
  //       skillLevel === "Junior"
  //         ? Math.floor(Math.random() * 12) + 1
  //         : skillLevel === "Mid"
  //           ? Math.floor(Math.random() * 24) + 12
  //           : Math.floor(Math.random() * 48) + 24

  //     return {
  //       skill,
  //       proficiency,
  //       growthRate,
  //       monthsExperience,
  //     }
  //   })

  //   candidates.push({
  //     id: i.toString(),
  //     name: `${surname}${givenName}`,
  //     avatar: getRandomItem(MOCK_DATA.avatars),
  //     title: `${titlePrefix} ${getRandomItem(MOCK_DATA.titles)}`,
  //     location: getRandomItem(MOCK_DATA.locations),
  //     skills: selectedSkillSet,
  //     skillLevel,
  //     skillProficiencies,
  //     experience: skillLevel === "Junior" ? "신입" : getRandomItem(MOCK_DATA.experiences),
  //     isBookmarked: false,
  //     salary: getRandomItem(MOCK_DATA.salaries),
  //     availability: getRandomItem(MOCK_DATA.availabilities),
  //     education: getRandomItem(MOCK_DATA.educations),
  //     improvement: Math.floor(Math.random() * 20) + 1,
  //     appliedJobPosting: getRandomItem(MOCK_DATA.jobPostings),
  //     previousApplications:
  //       Math.random() > 0.5
  //         ? [
  //             {
  //               company: getRandomItem(MOCK_DATA.companies),
  //               jobTitle: getRandomItem(MOCK_DATA.titles),
  //               status: getRandomItem(MOCK_DATA.applicationStatuses),
  //             },
  //           ]
  //         : undefined,
  //   })
  // }

  const res = await fetch(`/api/company_monitor/candidates`, { cache: "no-store" });
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  
  const data = await res.json();
  console.log("data", data)
  return Array.isArray(data?.candidates) ? data.candidates : [];
}
