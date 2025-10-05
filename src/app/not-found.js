// src/app/not-found.js
import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect('/'); // Instantly send user home
}
