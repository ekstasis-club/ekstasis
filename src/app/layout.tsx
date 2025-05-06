import '../styles/global.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es" className="h-full bg-black">
      <body className="relative h-full min-h-screen bg-black text-white font-sans">
        {/* Capa de fondo forzada */}
        <div className="fixed inset-0 bg-black z-[-1]" />
        
        {/* Contenido */}
        {children}
      </body>
    </html>
  );
}
