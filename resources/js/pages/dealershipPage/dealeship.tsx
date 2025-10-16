import { InputGroupIcon } from '@/components/headerBuscador/header-search-cart';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dealership',
        href: 'dealershipPage/dealeship',
    },
];

export default function Dealership() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dealership" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4 md:flex-row">
                {/* Buscador arriba, ocupa toda la fila */}
                <div className="grid w-full max-w-sm gap-6 md:w-auto md:flex-shrink-0">
                    <InputGroupIcon />
                </div>

                {/* Contenedor principal con imagen a la izquierda y contenido a la derecha */}
                <div className="flex flex-1 gap-4">
                    {/* Imagen del carro */}
                    <div className="relative min-h-[100vh] w-1/2 overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <img
                            src="/img/koniseg_fondo_intro.jpg"
                            alt="imagen"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Div derecho con modelo 3D arriba y info abajo */}
                    <div className="flex w-1/2 flex-col gap-4 rounded-xl border border-sidebar-border/70 bg-black p-4 text-white dark:border-sidebar-border">
                        {/* Modelo 3D con fondo negro */}
                        <div className="flex h-64 items-center justify-center rounded-xl border border-sidebar-border/70 bg-black dark:border-sidebar-border">
                            {/* Aquí va tu componente o iframe del modelo 3D */}
                            <p>Modelo 3D aquí</p>
                        </div>

                        {/* Información del carro */}
                        <div className="flex-1 overflow-auto rounded-xl border border-sidebar-border/70 bg-black p-4 dark:border-sidebar-border">
                            {/* Aquí va la información dinámica del carro */}
                            <p>model:Regera</p>
                            <p>brand:koenigsegg</p>
                            <p>engine:3.0L Turbo I6</p>
                            <p>power:335 hp</p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
