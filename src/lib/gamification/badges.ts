export const BADGE_DEFINITIONS = [
  {
    id: 'first-seed',
    name: '첫 씨앗',
    icon: '🌱',
    description: '첫 상품 등록을 축하합니다!',
    rarity: 'common',
    condition: {
      type: 'product_count',
      value: 1,
    },
  },
  {
    id: 'margin-master',
    name: '마진 마스터',
    icon: '💰',
    description: '마진 70% 이상 상품 등록',
    rarity: 'rare',
    condition: {
      type: 'margin_threshold',
      value: 70,
    },
  },
  {
    id: 'speed-racer',
    name: '스피드 레이서',
    icon: '⚡',
    description: '10초 만에 상품 등록 완료',
    rarity: 'rare',
    condition: {
      type: 'speed',
      value: 10,
    },
  },
  {
    id: 'consecutive',
    name: '연속 등록',
    icon: '🔥',
    description: '5일 연속 상품 등록',
    rarity: 'epic',
    condition: {
      type: 'consecutive',
      value: 5,
    },
  },
  {
    id: 'hit-products',
    name: '백발백중',
    icon: '🎯',
    description: '히트 상품 10개 찾기',
    rarity: 'epic',
    condition: {
      type: 'hit_count',
      value: 10,
    },
  },
  {
    id: 'garden-queen',
    name: '정원의 여왕',
    icon: '👑',
    description: '레벨 50 달성',
    rarity: 'legendary',
    condition: {
      type: 'level',
      value: 50,
    },
  },
];

export async function checkBadgeUnlock(
  userId: string,
  action: string,
  value?: number
): Promise<any> {
  const user = await getUserWithStats(userId);
  for (const badge of BADGE_DEFINITIONS) {
    if (user.badges.some(b => b.badgeId === badge.id)) {
      continue;
    }
    const unlocked = checkBadgeCondition(badge, user, action, value);
    if (unlocked) {
      await unlockBadge(userId, badge.id);
      return badge;
    }
  }
  return null;
}

function checkBadgeCondition(
  badge: any,
  user: any,
  action: string,
  value?: number
): boolean {
  const { condition } = badge;
  switch (condition.type) {
    case 'product_count':
      return user.productCount >= condition.value;
    case 'margin_threshold':
      return value !== undefined && value >= condition.value;
    case 'speed':
      return value !== undefined && value <= condition.value;
    case 'consecutive':
      return user.consecutiveDays >= condition.value;
    case 'hit_count':
      return user.hitProductCount >= condition.value;
    case 'level':
      return user.level >= condition.value;
    default:
      return false;
  }
}
