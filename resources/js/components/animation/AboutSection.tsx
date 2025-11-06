import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.2 1'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.25 },
        },
    };

    const paragraphVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' as const },
        },
    };

    const underlineVariants: Variants = {
        hidden: { width: 0, opacity: 0 },
        show: {
            width: '100%',
            opacity: 1,
            transition: { duration: 1, ease: 'easeOut' as const },
        },
    };

    return (
        <motion.section
            ref={ref}
            style={{ y, opacity }}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-30 mx-auto my-40 max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-10 text-center text-[#1b1b18] shadow-2xl backdrop-blur-lg dark:bg-black/40 dark:text-[#EDEDEC]"
        >
            {/* Título con subrayado animado */}
            <motion.div
                className="relative mb-12 inline-block"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.h2
                    variants={paragraphVariants}
                    className="mb-4 text-4xl font-bold text-[#1b1b18] dark:text-white"
                >
                    ¿Quiénes somos?
                </motion.h2>

                <motion.div
                    variants={underlineVariants}
                    className="h-[3px] rounded-full bg-gradient-to-r from-[#ffcc00] via-[#ff8800] to-[#ff0000] shadow-[0_0_10px_rgba(255,136,0,0.7)]"
                />
            </motion.div>

            {/* Texto con animaciones */}
            <motion.div
                className="space-y-5 text-lg leading-relaxed"
                variants={containerVariants}
            >
                <motion.p variants={paragraphVariants}>
                    Somos un concesionario multimarca dedicados desde hace 10
                    años a la venta e importación de carros. A lo largo de esta
                    década, nos hemos consolidado como un referente confiable en
                    el mercado automotriz, ofreciendo una amplia variedad de
                    vehículos de las mejores marcas, adaptados a las necesidades
                    y gustos de cada cliente.
                </motion.p>

                <motion.p variants={paragraphVariants}>
                    Nuestro compromiso es brindar productos de calidad, con
                    total transparencia y un servicio personalizado que
                    garantice la satisfacción y confianza de quienes nos eligen.
                </motion.p>

                <motion.p variants={paragraphVariants}>
                    Contamos con un equipo profesional altamente capacitado que
                    acompaña a nuestros clientes en cada paso, desde la
                    selección hasta la entrega del vehículo, asegurando una
                    experiencia única y segura.
                </motion.p>

                <motion.p variants={paragraphVariants}>
                    Además, nos enorgullece mantener procesos de importación
                    ágiles y confiables, lo que nos permite ofrecer las últimas
                    novedades y modelos exclusivos a precios competitivos.
                </motion.p>

                <motion.p
                    variants={paragraphVariants}
                    className="text-lg font-semibold text-[#111] dark:text-white/90"
                >
                    ¡Ven y descubre por qué somos la mejor opción para quienes
                    buscan calidad, variedad y confianza al comprar su próximo
                    carro!
                </motion.p>
            </motion.div>
        </motion.section>
    );
}
