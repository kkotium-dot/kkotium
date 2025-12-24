export const DAILY_QUESTS = [
  {
    id: 'daily-register-3',
    type: 'daily',
    title: '상품 3개 등록하기',
    description: '오늘 상품 3개를 등록하세요',
    target: 3,
    reward: {
      type: 'exp',
      amount: 30,
    },
  },
  {
    id: 'daily-ai-5',
    type: 'daily',
    title: 'AI 상품명 5개 생성',
    description: 'AI로 상품명을 5개 생성하세요',
    target: 5,
    reward: {
      type: 'exp',
      amount: 10,
    },
  },
  {
    id: 'daily-high-margin',
    type: 'daily',
    title: '고마진 상품 등록',
    description: '마진 50% 이상 상품을 등록하세요',
    target: 1,
    reward: {
      type: 'exp',
      amount: 5,
    },
  },
];

export async function initializeDailyQuests(userId: string): Promise<void> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (const quest of DAILY_QUESTS) {
    await prisma.userQuest.upsert({
      where: {
        userId_questId_date: {
          userId,
          questId: quest.id,
          date: today,
        },
      },
      create: {
        userId,
        questId: quest.id,
        progress: 0,
        completed: false,
        date: today,
      },
      update: {},
    });
  }
}

export async function updateQuestProgress(
  userId: string,
  questType: string,
  increment: number = 1
): Promise<{ completed: boolean; reward?: any }> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const userQuest = await prisma.userQuest.findFirst({
    where: {
      userId,
      quest: { type: questType },
      date: today,
      completed: false,
    },
    include: { quest: true },
  });
  if (!userQuest) return { completed: false };
  const newProgress = userQuest.progress + increment;
  const completed = newProgress >= userQuest.quest.target;
  await prisma.userQuest.update({
    where: { id: userQuest.id },
     {
      progress: newProgress,
      completed,
      completedAt: completed ? new Date() : undefined,
    },
  });
  if (completed) {
    await giveReward(userId, userQuest.quest.reward);
    return {
      completed: true,
      reward: userQuest.quest.reward,
    };
  }
  return { completed: false };
}
