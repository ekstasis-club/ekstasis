import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function CatchAllPage() {

  // Mostrar 404 si no hay coincidencias con rutas conocidas
  notFound();

  return null;
}
