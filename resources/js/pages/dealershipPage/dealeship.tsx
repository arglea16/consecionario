import { InputGroupIcon } from '@/components/headerBuscador/header-search-cart';
import { ModelErrorBoundary } from '@/components/model3d/modelErrorBoundary';
import ModelViewer from '@/components/model3d/modelo_3d';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

interface Car {
    id: number;
    brand: string;
    model: string;
    engine: string;
    power: string;
    price: number;
    image_path?: string;
    model_3d?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dealership',
        href: 'dealershipPage/dealeship',
    },
];

export default function Dealership() {
    const [car, setCar] = useState<Car | null>(null); // Estado tipado correctamente

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dealership" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4 md:flex-row">
                {/* Buscador arriba, ocupa toda la fila */}
                <div className="grid w-full max-w-sm gap-6 md:w-auto md:flex-shrink-0">
                    {/* Pasamos la función setCar para que InputGroupIcon pueda enviar el carro seleccionado */}
                    <InputGroupIcon onCarSelected={setCar} />
                </div>

                {/* Contenedor principal con imagen a la izquierda y contenido a la derecha */}
                <div className="flex flex-1 gap-4">
                    {/* Imagen del carro */}
                    <div className="relative min-h-[100vh] w-1/2 overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        {car ? (
                            <img
                                src={`/img/${car.image_path}`}
                                alt={`${car.brand} ${car.model}`}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <img
                                src="/img/KoenigseggRegera.jpg"
                                alt="imagen"
                                className="h-full w-full object-cover"
                            />
                        )}
                    </div>

                    {/* Div derecho con modelo 3D arriba y info abajo */}
                    <div className="flex w-1/2 flex-col gap-4 rounded-xl border border-sidebar-border/70 bg-black p-4 text-white dark:border-sidebar-border">
                        {/* Modelo 3D con fondo negro */}
                        <div className="flex h-64 items-center justify-center rounded-xl border border-sidebar-border/70 bg-white dark:border-sidebar-border">
                            {car ? (
                                car.model_3d && car.model_3d.trim() !== '' ? (
                                    <ModelErrorBoundary>
                                        <ModelViewer
                                            modelPath={`/model3d/${car.model_3d}`}
                                        />
                                    </ModelErrorBoundary>
                                ) : (
                                    <p className="text-black">
                                        No hay modelo 3D disponible
                                    </p>
                                )
                            ) : (
                                <p className="text-black">
                                    Selecciona un carro para ver el modelo 3D
                                </p>
                            )}
                        </div>

                        {/* Información del carro */}
                        <div className="flex-1 overflow-auto rounded-xl border border-sidebar-border/70 bg-black p-4 dark:border-sidebar-border">
                            {car ? (
                                <>
                                    <p>model: {car.model}</p>
                                    <p>brand: {car.brand}</p>
                                    <p>engine: {car.engine}</p>
                                    <p>power: {car.power}</p>
                                    <p>price: {car.price}$</p>
                                </>
                            ) : (
                                <p>Busca un carro para ver su información</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
