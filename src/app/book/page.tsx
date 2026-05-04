'use client';

import { useMemo, useState } from 'react';
import { CinematicButton } from '@/components/primitives/CinematicButton';
import { TypeScale } from '@/components/primitives/TypeScale';
import { mockProcessPayment } from '@/lib/stripe-mock';
import { useBookingStore } from '@/stores/bookingStore';

export default function BookPage() {
  const store = useBookingStore();
  const [cardNumber, setCardNumber] = useState('');

  const total = useMemo(() => {
    const addOnTotal = store.addOns.filter((item) => item.selected).reduce((sum, item) => sum + item.priceUSD, 0);
    return 2000 + addOnTotal;
  }, [store.addOns]);

  const handlePayment = async () => {
    store.setPaymentStatus('processing');
    store.setPaymentError(null);
    const result = await mockProcessPayment(total, { cardNumber });
    if (!result.success) {
      store.setPaymentStatus('error');
      store.setPaymentError(result.error ?? 'Unknown payment failure');
      return;
    }
    store.setPaymentStatus('success');
    store.setTransactionId(result.transactionId ?? null);
    store.setStep(5);
  };

  return (
    <section>
      <TypeScale variant='display' as='h1'>Booking Wizard</TypeScale>
      <TypeScale variant='body'>Step {store.currentStep} of 5</TypeScale>
      {store.currentStep < 4 ? <CinematicButton variant='primary' size='md' onClick={() => store.setStep((Math.min(4, store.currentStep + 1)) as 1|2|3|4|5)}>Continue</CinematicButton> : null}
      {store.currentStep === 4 ? (
        <div>
          <input aria-label='Card number' value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
          <CinematicButton variant='primary' size='md' onClick={handlePayment} isLoading={store.paymentStatus === 'processing'}>Pay ${total}</CinematicButton>
          {store.paymentError ? <p>{store.paymentError}</p> : null}
        </div>
      ) : null}
      {store.currentStep === 5 ? <p>Confirmed {store.transactionId}</p> : null}
    </section>
  );
}
