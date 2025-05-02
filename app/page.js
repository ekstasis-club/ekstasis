import { Suspense } from 'react';
import HomePage from './HomePage';

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white text-center py-20">Cargando...</div>}>
      <HomePage />
    </Suspense>
  );
}

