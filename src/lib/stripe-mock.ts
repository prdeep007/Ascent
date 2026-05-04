export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

export async function mockProcessPayment(amount: number, _cardDetails: unknown): Promise<PaymentResult> {
  await new Promise<void>((resolve) => {
    window.setTimeout(() => resolve(), 1500);
  });

  if (Math.random() < 0.1 || amount <= 0) {
    return {
      success: false,
      error: 'Your card was declined. Please try a different payment method.'
    };
  }

  return { success: true, transactionId: `TXN-${Date.now()}` };
}
