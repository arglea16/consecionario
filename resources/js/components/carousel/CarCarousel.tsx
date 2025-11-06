import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Car {
    model: string;
    price: number;
    image_path: string;
}

const CarCarousel: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        fetch('/dealerships')
            .then((res) => res.json())
            .then((data) => setCars(data))
            .catch((err) => console.error('Error cargando autos:', err));
    }, []);

    return (
        <div className="relative z-20 mx-auto w-full max-w-6xl py-20">
            {/* 🔥 Título con animación y diseño */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative mb-12 text-center text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_20px_rgba(255,150,50,0.7)] select-none md:text-6xl"
            >
                <span className="relative inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
                    Autos en Venta
                </span>

                {/* Línea animada debajo */}
                <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{
                        duration: 1.2,
                        ease: 'easeOut',
                        delay: 0.3,
                    }}
                    viewport={{ once: true }}
                    className="absolute bottom-[-10px] left-1/2 h-[3px] w-[0%] -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 shadow-[0_0_15px_rgba(255,150,50,0.7)]"
                />
            </motion.h2>

            {/* 🏎️ Carrusel */}
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{ enabled: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={20}
                loop={cars.length > 3}
                className="!pb-12" // deja espacio para las flechas
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {cars.map((car, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden rounded-2xl border border-gray-300 bg-white/90 p-4 text-center shadow-xl backdrop-blur-sm hover:shadow-2xl dark:border-[#3E3E3A] dark:bg-[#1b1b18]/90"
                        >
                            <img
                                src={`/img/${car.image_path}`}
                                alt={car.model}
                                className="mb-3 h-56 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <h3 className="text-lg font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                {car.model}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                ${car.price.toLocaleString()}
                            </p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarCarousel;
