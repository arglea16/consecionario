import AboutSection from '@/components/animation/AboutSection';
import CarScrollAnimation from '@/components/animation/CarScrollAnimation';
import CarCarousel from '@/components/carousel/CarCarousel';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Dealership">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <motion.header
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 80 }}
                    className="fixed top-4 left-0 z-50 w-full rounded-2xl bg-[#FDFDFC]/80 text-sm shadow-md backdrop-blur-lg dark:bg-[#0a0a0a]/80"
                >
                    <nav className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-10 py-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-md border border-[#19140035] px-5 py-2 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-md border border-transparent px-5 py-2 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className="inline-block rounded-md border border-[#19140035] px-5 py-2 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </motion.header>

                {/*  Fondo animado al hacer scroll */}
                <div>
                    <CarScrollAnimation />
                </div>

                {/*  Carrusel de autos */}
                <div>
                    <CarCarousel />
                </div>

                {/*  Sección informativa  */}
                <AboutSection />
            </div>
        </>
    );
}
