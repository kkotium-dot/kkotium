import * as XLSX from 'xlsx';

interface ProductFormData {
  name: string;
  supplier: string;
  category: string;
  sku: string;
  supplierPrice: number;
  salePrice: number;
  shippingStrategy: 'free' | 'conditional' | 'paid';
  freeShippingThreshold: number;
  shippingFee: number;
  supplierShippingFee: number;
  supplierReturnFee: number;
  hasOptions: boolean;
  optionName: string;
  optionValues: string[];
  mainImage: File | null;
  additionalImages: File[];
  description: string;
  keywords: string[];
  tags: string[];
  internalNote: string;
  internalTags: string[];
}

export const exportToExcel = (formData: ProductFormData) => {
  const ws = XLSX.utils.json_to_sheet([
    {
      상품명: formData.name,
      공급처: formData.supplier,
      카테고리: formData.category,
      SKU: formData.sku,
      공급처가격: formData.supplierPrice,
      판매가: formData.salePrice,
      배송전략: formData.shippingStrategy,
      무료배송기준: formData.freeShippingThreshold,
      배송비: formData.shippingFee,
      공급처배송비: formData.supplierShippingFee,
      공급처반품비: formData.supplierReturnFee,
      옵션사용: formData.hasOptions,
      옵션명: formData.optionName,
      옵션값: formData.optionValues.join(', '),
      대표이미지: formData.mainImage ? formData.mainImage.name : '',
      추가이미지: formData.additionalImages.map(img => img.name).join(', '),
      상세설명: formData.description,
      키워드: formData.keywords.join(', '),
      태그: formData.tags.join(', '),
      메모: formData.internalNote,
      내부태그: formData.internalTags.join(', '),
    },
  ]);

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, '상품');

  XLSX.writeFile(wb, '네이버_상품_업로드.xlsx');
};
