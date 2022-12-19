import { Suspense, useState } from 'react';
import Verses from '../../components/Verses';
import Spin from '../../components/Spin';

export default function Surah() {
  return (
    <Suspense fallback={<Spin />}>
      <Verses />
    </Suspense>
  );
}
