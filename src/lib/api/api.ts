// API Routes 구조
// /api/
// ├── products/
// │   ├── GET    /              # 상품 목록 조회
// │   ├── POST   /              # 상품 생성
// │   ├── GET    /[id]          # 상품 상세 조회
// │   ├── PUT    /[id]          # 상품 수정
// │   ├── DELETE /[id]          # 상품 삭제
// │   ├── POST   /[id]/copy     # 상품 복사
// │   └── POST   /export        # 엑셀 생성
// ├── ai/
// │   ├── POST   /product-name  # AI 상품명 생성
// │   ├── POST   /keywords      # 황금 키워드 찾기
// │   ├── POST   /kkoti-score   # 꼬띠 점수 평가
// │   └── POST   /description   # 상세 설명 생성
// ├── margin/
// │   └── POST   /calculate     # 마진 계산
// ├── user/
// │   ├── GET    /me            # 내 정보
// │   ├── GET    /level         # 레벨 정보
// │   └── PUT    /level         # 레벨 업데이트
// ├── quests/
// │   ├── GET    /daily         # 데일리 퀘스트
// │   └── POST   /[id]/complete # 퀘스트 완료
// └── badges/
//     ├── GET    /              # 배지 목록
//     └── POST   /unlock        # 배지 획득
