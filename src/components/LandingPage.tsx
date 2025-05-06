'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientScrollHandler() {
  const searchParams = useSearchParams();
  const scrollTarget = searchParams.get('scroll');

  useEffect(() => {
    if (scrollTarget) {
      const section = document.getElementById(scrollTarget);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollTarget]);

  return null;
}
