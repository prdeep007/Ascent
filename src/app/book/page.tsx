'use client';

import { useEffect, useMemo, useState } from 'react';
import { CinematicButton } from '@/components/primitives/CinematicButton';
import { TypeScale } from '@/components/primitives/TypeScale';
import { mockProcessPayment } from '@/lib/stripe-mock';
import { useBookingStore } from '@/stores/bookingStore';

export default function BookPage() {
  const store = useBookingStore();
  const [cardNumber, setCardNumber] = useState('');
  const [offline, setOffline] = useState(false);
  const [failures, setFailures] = useState(0);

  useEffect(() => {
    const toOffline = () => setOffline(true);
    const toOnline = () => {
      setOffline(false);
      window.setTimeout(() => setOffline(false), 2000);
    };

    window.addEventListener('offline', toOffline);
    window.addEventListener('online', toOnline);
    return () => {
      window.removeEventListener('offline', toOffline);
      window.removeEventListener('online', toOnline);
    };
  }, []);

  const total = useMemo(() => {
    const addOnTotal = store.addOns.filter((item) => item.selected).reduce((sum, item) => sum + item.priceUSD, 0);
    return 2000 + addOnTotal;
  }, [store.addOns]);

  const saveWithRetry = async (step: number) => {
    const waits = [1000, 2000, 4000];
    for (let index = 0; index < waits.length; index += 1) {
      const ok = Math.random() > 0.2;
      if (ok) {
        store.setStep(step as 1 | 2 | 3 | 4 | 5);
        return true;
      }
      await new Promise<void>((resolve) => window.setTimeout(resolve, waits[index]));
    }
    return false;
  };

  const handleContinue = async () => {
    const next = Math.min(4, store.currentStep + 1);
    const saved = await saveWithRetry(next);
    if (!saved) {
      store.setPaymentError('Couldn\'t save your progress.');
    }
  };

  const handlePayment = async () => {
    if (offline) return;
    store.setPaymentStatus('processing');
    store.setPaymentError(null);
    const result = await mockProcessPayment(total, { cardNumber });
    if (!result.success) {
      const nextFailures = failures + 1;
      setFailures(nextFailures);
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
      {offline ? <p>You appear to be offline. Your progress is saved.</p> : null}
      <TypeScale variant='body'>Step {store.currentStep} of 5</TypeScale>
      {store.currentStep < 4 ? <CinematicButton variant='primary' size='md' onClick={handleContinue}>Continue</CinematicButton> : null}
      {store.currentStep === 4 ? (
        <div>
          <input aria-label='Card number' value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
          <CinematicButton variant='primary' size='md' onClick={handlePayment} isLoading={store.paymentStatus === 'processing'} disabled={offline}>Pay ${total}</CinematicButton>
          {store.paymentError ? <p>{store.paymentError}</p> : null}
          {failures >= 2 ? <a href='mailto:support@ascentescapes.com'>Having trouble? Contact us directly and we&apos;ll hold your spot.</a> : null}
        </div>
      ) : null}
      {store.currentStep === 5 ? <p>Confirmed {store.transactionId}</p> : null}
    </section>
  );
}
