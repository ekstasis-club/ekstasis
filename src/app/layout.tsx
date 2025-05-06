import '../styles/global.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="h-full bg-black">
      <body className="relative h-full min-h-screen bg-black text-white font-sans">
        {/* Fondo negro fijo para Safari/iOS */}
        <div className="fixed inset-0 bg-black z-[-1]" />
        {children}
      </body>
    </html>
  );
}
