import '../styles/global.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es" className="h-full bg-black">
      <body className="min-h-screen h-full bg-black text-white font-sans">
        <div className="fixed inset-0 bg-black z-[-1]" />
        {children}
      </body>
    </html>
  );
}
