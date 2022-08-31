import { Suspense } from 'react';
import Time from '../components/Time';
import Spin from '../components/Spin';

export default function Zone() {
  return (
    <Suspense fallback={<Spin />}>
      <Time />
    </Suspense>
  );
}
