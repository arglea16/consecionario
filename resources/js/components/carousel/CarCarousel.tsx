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
        fetch('/dealerships') // endpoint que devuelve los autos
            .then((res) => res.json())
            .then((data) => setCars(data))
            .catch((err) => console.error('Error cargando autos:', err));
    }, []);

    return (
        <div className="mx-auto w-full max-w-6xl py-10">
            <h2 className="mb-6 text-center text-2xl font-bold">
                Autos en Venta
            </h2>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={20}
                loop={cars.length > 3}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {cars.map((car, index) => (
                    <SwiperSlide key={index}>
                        <div className="overflow-hidden rounded-2xl bg-white p-3 text-center shadow-md dark:bg-[#1b1b18]">
                            <img
                                src={`/img/${car.image_path}`}
                                alt={car.model}
                                className="mb-3 h-48 w-full rounded-xl object-cover"
                            />
                            <h3 className="text-lg font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                {car.model}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                ${car.price.toLocaleString()}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarCarousel;
