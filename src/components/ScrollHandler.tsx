'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTarget = searchParams.get('scroll');
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400); // tiempo para asegurar que la sección esté montada
      }
    }
  }, [searchParams]);

  return null;
}
