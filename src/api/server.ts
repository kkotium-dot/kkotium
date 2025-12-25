import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// 기본 라우트
app.get('/', (req: Request, res: Response) => {
  res.json({ message: '🌸 꽃틔움가든 API 서버' });
});

// 상품 목록 조회
app.get('/api/products', async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: '상품 목록 조회 실패' });
  }
});

// 상품 등록
app.post('/api/products', async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.create({
       req.body
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: '상품 등록 실패' });
  }
});

// 상품 상세 조회
app.get('/api/products/:id', async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: req.params.id }
    });
    if (!product) {
      return res.status(404).json({ error: '상품을 찾을 수 없습니다' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: '상품 상세 조회 실패' });
  }
});

// 상품 수정
app.put('/api/products/:id', async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.update({
      where: { id: req.params.id },
       req.body
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: '상품 수정 실패' });
  }
});

// 상품 삭제
app.delete('/api/products/:id', async (req: Request, res: Response) => {
  try {
    await prisma.product.delete({
      where: { id: req.params.id }
    });
    res.json({ message: '상품 삭제 완료' });
  } catch (error) {
    res.status(500).json({ error: '상품 삭제 실패' });
  }
});

// 마진 계산 (단순 로직)
app.post('/api/margin/calculate', (req: Request, res: Response) => {
  try {
    const { supplierPrice, salePrice } = req.body;
    const margin = ((salePrice - supplierPrice) / salePrice) * 100;
    res.json({ margin: Number.isFinite(margin) ? margin.toFixed(2) : '0.00' });
  } catch (error) {
    res.status(500).json({ error: '마진 계산 실패' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🌸 꽃틔움가든 API 서버가 http://localhost:${PORT} 에서 실행 중입니다!`);
});

process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
