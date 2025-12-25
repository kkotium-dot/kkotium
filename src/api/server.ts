import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// 상품 목록 조회
app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: '상품 목록 조회 실패' });
  }
});

// 상품 등록
app.post('/api/products', async (req, res) => {
  try {
    const product = await prisma.product.create({
       req.body,
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: '상품 등록 실패' });
  }
});

// 상품 상세 조회
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: req.params.id },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: '상품 상세 조회 실패' });
  }
});

// 상품 수정
app.put('/api/products/:id', async (req, res) => {
  try {
    const product = await prisma.product.update({
      where: { id: req.params.id },
       req.body,
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: '상품 수정 실패' });
  }
});

// 상품 삭제
app.delete('/api/products/:id', async (req, res) => {
  try {
    await prisma.product.delete({
      where: { id: req.params.id },
    });
    res.json({ message: '상품 삭제 완료' });
  } catch (error) {
    res.status(500).json({ error: '상품 삭제 실패' });
  }
});

// AI 상품명 생성
app.post('/api/ai/product-name', async (req, res) => {
  try {
    // AI 로직 구현
    const names = [
      { name: 'AI 상품명 1', strategy: 'mass', expectedCTR: 8.5, reasoning: '설명' },
      { name: 'AI 상품명 2', strategy: 'niche', expectedCTR: 7.2, reasoning: '설명' },
      { name: 'AI 상품명 3', strategy: 'blueocean', expectedCTR: 9.1, reasoning: '설명' },
    ];
    res.json({ names });
  } catch (error) {
    res.status(500).json({ error: 'AI 상품명 생성 실패' });
  }
});

// 키워드 추천
app.post('/api/ai/keywords', async (req, res) => {
  try {
    // AI 로직 구현
    const keywords = [
      { keyword: '무선이어폰', searchVolume: 'high', competition: 'low', goldenScore: 220, reasoning: '설명' },
      { keyword: '블루투스이어폰', searchVolume: 'medium', competition: 'medium', goldenScore: 180, reasoning: '설명' },
      { keyword: '저가이어폰', searchVolume: 'low', competition: 'high', goldenScore: 150, reasoning: '설명' },
    ];
    res.json({ keywords });
  } catch (error) {
    res.status(500).json({ error: '키워드 추천 실패' });
  }
});

// 꼬띠 점수 평가
app.post('/api/ai/kkoti-score', async (req, res) => {
  try {
    // AI 로직 구현
    const totalScore = 85;
    const feedback = '이 상품은 마진이 높고 판매가 쉬워요!';
    const recommendation = '지금 바로 등록하세요! 🌸';
    res.json({ totalScore, feedback, recommendation });
  } catch (error) {
    res.status(500).json({ error: '꼬띠 점수 평가 실패' });
  }
});

// 마진 계산
app.post('/api/margin/calculate', async (req, res) => {
  try {
    const { supplierPrice, salePrice } = req.body;
    const margin = ((salePrice - supplierPrice) / salePrice) * 100;
    res.json({ margin: margin.toFixed(2) });
  } catch (error) {
    res.status(500).json({ error: '마진 계산 실패' });
  }
});

// 사용자 정보
app.get('/api/user/me', async (req, res) => {
  try {
    const user = {
      level: 1,
      exp: 0,
      badges: [
        { name: '첫 씨앗', icon: '🌱' },
        { name: '마진 마스터', icon: '💰' },
      ],
      quests: [
        { id: 'daily-register-3', title: '상품 3개 등록하기', progress: 2, target: 3 },
        { id: 'daily-ai-5', title: 'AI 상품명 5개 생성', progress: 1, target: 5 },
      ],
    };
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: '사용자 정보 조회 실패' });
  }
});

// 퀘스트 완료
app.post('/api/quests/:id/complete', async (req, res) => {
  try {
    res.json({ message: '퀘스트 완료!' });
  } catch (error) {
    res.status(500).json({ error: '퀘스트 완료 실패' });
  }
});

// 배지 획득
app.post('/api/badges/unlock', async (req, res) => {
  try {
    res.json({ message: '배지 획득!' });
  } catch (error) {
    res.status(500).json({ error: '배지 획득 실패' });
  }
});

// 통계
app.get('/api/stats', async (req, res) => {
  try {
    const stats = {
      totalProducts: 100,
      totalSales: 500,
      avgMargin: 45,
      topProducts: [
        { name: '상품 A', salesCount: 50 },
        { name: '상품 B', salesCount: 45 },
      ],
      recentSales: [
        { productName: '상품 A', date: '2025-12-25' },
        { productName: '상품 B', date: '2025-12-24' },
      ],
    };
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: '통계 조회 실패' });
  }
});

// 설정
app.get('/api/user/settings', async (req, res) => {
  try {
    const settings = {
      name: '사용자',
      email: 'user@example.com',
      defaultSupplier: '도매꾹',
      defaultShippingFee: 2500,
      defaultMarginTarget: 50,
      naverApiKey: 'naver-api-key',
      openaiApiKey: 'openai-api-key',
    };
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: '설정 조회 실패' });
  }
});

app.put('/api/user/settings', async (req, res) => {
  try {
    res.json({ message: '설정 저장 완료!' });
  } catch (error) {
    res.status(500).json({ error: '설정 저장 실패' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🌸 Server running on http://localhost:${PORT}`);
});
