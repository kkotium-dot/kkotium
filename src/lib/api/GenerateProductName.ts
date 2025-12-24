interface GenerateProductNameRequest {
  category: string;
  keywords: string[];
  targetAudience?: string;
}

interface GenerateProductNameResponse {
  names: Array<{
    name: string;
    strategy: 'mass' | 'blueocean' | 'niche';
    expectedCTR: number;
    reasoning: string;
  }>;
}

export const generateProductName = async (
  category: string,
  keywords: string[],
  targetAudience?: string
): Promise<GenerateProductNameResponse> => {
  const response = await fetch('/api/ai/product-name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      category,
      keywords,
      targetAudience,
    }),
  });

  return response.json();
};
