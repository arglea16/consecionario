import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CarScrollAnimation() {
    const ref = useRef<HTMLDivElement>(null);

    // Detecta el progreso del scroll dentro del contenedor
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    // Define animaciones basadas en el scroll
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.2]);
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

    return (
        <div
            ref={ref}
            className="relative z-0 h-[300vh] overflow-hidden bg-neutral-950 text-white"
        >
            {/* Imagen de fondo animada */}
            <motion.img
                src="/img/ferrari-458-spider.jpg"
                alt="Car"
                className="fixed top-0 left-0 -z-10 h-full w-full object-cover"
                style={{ scale, opacity, y }}
            />

            {/* Contenido superpuesto */}
            <div className="relative z-10 flex h-screen flex-col items-center justify-center">
                <h1 className="text-5xl font-bold">Tu próximo carro</h1>
                <p className="mt-4 max-w-xl text-center text-lg">
                    Descubre su potencia, diseño y tecnología a medida que
                    exploras.
                </p>
            </div>

            <div className="relative z-10 flex h-screen flex-col items-center justify-center">
                <h2 className="text-4xl font-semibold">
                    Detalles de rendimiento
                </h2>
                <p className="mt-4 max-w-lg text-center text-lg">
                    Motor V8 biturbo, 0–100 km/h en 3.2s, tracción total
                    inteligente.
                </p>
            </div>

            <div className="relative z-10 flex h-screen flex-col items-center justify-center">
                <h2 className="text-4xl font-semibold">Diseño interior</h2>
                <p className="mt-4 max-w-lg text-center text-lg">
                    Lujo, comodidad y tecnología fusionados para ofrecerte una
                    experiencia única.
                </p>
            </div>
        </div>
    );
}
