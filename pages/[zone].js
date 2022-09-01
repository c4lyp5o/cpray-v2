import { Suspense } from 'react';
import Time from '../components/Time';
import Spin from '../components/Spin';

export default function Zone() {
  return (
    <main className='container'>
      <Suspense fallback={<Spin />}>
        <Time />
      </Suspense>
    </main>
  );
}
