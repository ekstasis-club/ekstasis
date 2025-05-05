import { notFound } from 'next/navigation';

export default function CatchAllPage() {

  // Mostrar 404 si no hay coincidencias con rutas conocidas
  notFound();

  return null;
}
