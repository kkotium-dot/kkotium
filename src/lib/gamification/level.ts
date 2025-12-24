// 레벨별 필요 경험치
export const LEVEL_EXP_REQUIREMENTS = {
  1: 0,
  2: 10,
  3: 25,
  4: 45,
  5: 70,
  6: 100,
  7: 135,
  8: 175,
  9: 220,
  10: 270,
  // ... 최대 50레벨
};

// 경험치 획득 규칙
export const EXP_REWARDS = {
  PRODUCT_CREATE: 10,
  PRODUCT_SALE: 20,
  HIGH_MARGIN: 15,      // 50% 이상
  AI_USAGE: 5,
  QUEST_COMPLETE: 30,
};

// 레벨 계산
export function calculateLevel(exp: number): number {
  let level = 1;
  for (const [lvl, requiredExp] of Object.entries(LEVEL_EXP_REQUIREMENTS)) {
    if (exp >= requiredExp) {
      level = parseInt(lvl);
    } else {
      break;
    }
  }
  return level;
}

// 레벨업 체크
export function checkLevelUp(
  currentLevel: number,
  currentExp: number,
  addedExp: number
): {
  levelUp: boolean;
  newLevel: number;
  newExp: number;
} {
  const newExp = currentExp + addedExp;
  const newLevel = calculateLevel(newExp);
  return {
    levelUp: newLevel > currentLevel,
    newLevel,
    newExp,
  };
}

// 레벨 타이틀
export function getLevelTitle(level: number): string {
  if (level <= 5) return '🌱 새싹 정원사';
  if (level <= 10) return '🌷 튤립 정원사';
  if (level <= 20) return '🌺 정원 마스터';
  return '🌸 꽃틔움 명인';
}
