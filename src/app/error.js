// src/app/error.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GlobalError({ error }) {
  const router = useRouter();

  useEffect(() => {
    console.error('App error:', error);
    router.replace('/'); // Redirect to home
  }, [error, router]);

  return null; // no UI
}
