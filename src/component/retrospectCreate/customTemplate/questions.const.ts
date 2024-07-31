export const REQUIRED_QUESTIONS = ["진행상황에 대해 얼마나 만족하나요?", "목표했던 부분에 얼마나 달성했나요?"] as const;

export const QUESTION_TYPES = ["팀워크", "의사소통", "문제해결", "시간관리", "목표설정", "자기계발", "목표달성"] as const;

export const RECOMMENDED_QUESTIONS: Record<(typeof QUESTION_TYPES)[number], string[]> = {
  팀워크: [
    "팀과의 협업은 어떻게 이루어졌나요?",
    "협업 과정에서 개선이 필요한 부분은 무엇인가요?",
    "팀워크를 향상시키기 위해 무엇을 할 수 있을까요?",
    "팀워크 강화를 위해 어떤 노력이 필요했나요?",
  ],
  의사소통: [
    "팀원 간의 소통은 원활했나요?",
    "팀원들과의 의사소통에서 중요하다고 느낀 점은 무엇이었나요?",
    "팀 내에서의 역할 분담은 적절했나요?",
    "의견 차이가 있을 때 어떻게 해결했나요?",
  ],
  문제해결: [
    "직면한 문제를 어떻게 해결했나요?",
    "문제 해결 과정에서 배운 점은 무엇인가요?",
    "비슷한 문제를 다시 겪을 때 더 나은 해결책은 무엇일까요?",
    "프로젝트 진행 중에 가장 큰 어려움은 무엇이었나요?",
    "어떤 문제가 발생했고, 이를 어떻게 해결했나요?",
    "예상치 못한 도전 과제는 무엇이었나요?",
  ],
  시간관리: [
    "업무 시간을 어떻게 관리했나요?",
    "가장 효과적으로 시간을 사용한 순간은 언제였나요?",
    "시간을 낭비했다고 생각되는 순간은 언제인가요?",
    "시간 관리를 개선하기 위해 무엇을 할 수 있을까요?",
  ],
  목표설정: [
    "최근에 직면한 가장 큰 도전은 무엇이었나요?",
    "다음 프로젝트의 주요 목표는 무엇인가요?",
    "목표 달성을 위한 계획은 무엇인가요?",
    "목표 달성을 방해할 수 있는 잠재적인 장애물은 무엇인가요?",
    "목표 달성을 위해 필요한 기술이나 역량은 무엇인가요?",
  ],
  자기계발: [
    "자신에게 주고 싶은 피드백은 무엇인가요?",
    "스스로 개선이 필요하다고 생각되는 부분은 무엇인가요?",
    "개선점을 바탕으로 앞으로 어떻게 발전할 수 있을까요?",
    "배운 내용을 실제 업무에 어떻게 적용했나요?",
    "추가적인 공부가 필요하다고 생각되는 부분은 무엇인가요?",
    "최근에 들은 강의나 교육 프로그램에서 가장 유익했던 부분은 무엇인가요?",
    "프로젝트를 통해 개인적으로 성장한 부분은 무엇인가요?",
    "앞으로의 프로젝트에서 자신에게 기대하는 것은 무엇인가요?",
  ],
  목표달성: [
    "이번 프로젝트의 주요 목표는 무엇이었나요?",
    "목표 달성에 가장 크게 기여한 요인은 무엇이었나요?",
    "이번 프로젝트에서 가장 큰 성과는 무엇이었나요?",
    "목표 달성을 위해 어떤 노력을 기울였나요?",
    "다음 프로젝트에서는 어떤 점을 개선하고 싶나요?",
    "더 나은 성과를 위해 어떤 방법을 사용할 수 있을까요?",
    "이번 프로젝트에서 배운 가장 중요한 교훈은 무엇인가요?",
  ],
};
