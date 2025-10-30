import CarCarousel from '@/components/carousel/CarCarousel';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

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
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <div>
                    <CarCarousel />
                </div>

                <div>
                    <p>¿Quienes somos?</p>
                    <p>
                        Somos un concesionario multimarca dedicados desde hace
                        10 años a la venta y importación de carros. A lo largo
                        de esta década, nos hemos consolidado como un referente
                        confiable en el mercado automotriz, ofreciendo una
                        amplia variedad de vehículos de las mejores marcas,
                        adaptados a las necesidades y gustos de cada cliente.
                    </p>
                    <p>
                        Nuestro compromiso es brindar productos de calidad, con
                        total transparencia y un servicio personalizado que
                        garantice la satisfacción y confianza de quienes nos
                        eligen. Contamos con un equipo profesional altamente
                        capacitado que acompaña a nuestros clientes en cada
                        paso, desde la selección hasta la entrega del vehículo,
                        asegurando una experiencia única y segura.
                    </p>
                    <p>
                        Además, nos enorgullece mantener procesos de importación
                        ágiles y confiables, lo que nos permite ofrecer las
                        últimas novedades y modelos exclusivos a precios
                        competitivos. En nuestro concesionario, la pasión por
                        los autos se combina con la atención cercana para hacer
                        realidad el sueño de poseer un vehículo ideal.
                    </p>
                    <p>
                        ¡Ven y descubre por qué somos la mejor opción para
                        quienes buscan calidad, variedad y confianza al comprar
                        su próximo carro!
                    </p>
                </div>
            </div>
        </>
    );
}
