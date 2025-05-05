import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';

type Props = {
  params: { rest: string[] };
};

export default function CatchAllPage({ params }: Props) {
  const t = useTranslations('NotFoundPage');

  // Mostrar 404 si no hay coincidencias con rutas conocidas
  notFound();

  return null;
}
