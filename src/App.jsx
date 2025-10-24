import React, { useState, useEffect, useRef } from 'react';
import { Smile, Zap, Leaf, Heart, Beef,Star, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import fitfood_icono from './assets/fitfood.svg';
import menuData from './data/menu.json';
import planesData from './data/planes.json';
import resenasData from './data/resenas.json';

// --- COMPONENTE DE ICONOS SOCIALES Y MODAL DE CONTACTO ---
const FloatingSocials = ({ isContactOpen, onClose }) => {
    const whatsappNumber = "5491112345678";
    const instagramUsername = "fit.foodcomidasaludable";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    const instagramUrl = `https://www.instagram.com/${instagramUsername}/`;

    const InstagramIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    );
    const WhatsAppIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 21.08c-1.53 0-3.03-.4-4.36-1.18l-.31-.18-3.24.85.87-3.17-.2-.33c-.85-1.4-1.31-3-1.31-4.68 0-4.9 3.98-8.88 8.88-8.88 4.9 0 8.88 3.98 8.88 8.88 0 4.9-3.98 8.88-8.88 8.88zm4.43-6.83c-.24-.12-1.45-.72-1.68-.8s-.39-.12-.56.12c-.17.24-.63.8-.78.96-.14.17-.29.19-.53.07s-1.02-.38-1.94-1.2c-.72-.64-1.2-1.45-1.34-1.68-.14-.24-.01-.38.11-.49.11-.11.24-.29.36-.43.12-.14.17-.24.26-.41.09-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.24-.87.85-.87 2.07s.89 2.4.98 2.56c.09.17 1.75 2.67 4.23 3.72.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.56.2-1.04.14-1.16-.07-.12-.24-.19-.48-.31z"/></svg>
    );
    
    return (
        <>
            {/* --- MODAL DE CONTACTO --- */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-150 ease-in-out ${isContactOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white rounded-lg shadow-xl p-6 w-full max-w-sm transition-transform duration-150 ease-in-out ${isContactOpen ? 'scale-100' : 'scale-95'}`}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">Contáctanos</h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                    </div>
                    <ul className="space-y-4">
                        <li>
                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                <span className="bg-gradient-to-br from-[#880af9] via-[#fe057d] to-[#ffa701] text-white p-2 rounded-full">
                                    <InstagramIcon />
                                </span>
                                <span className="font-semibold text-gray-700">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                <span className="bg-green-500 text-white p-2 rounded-full">
                                    <WhatsAppIcon />
                                </span>
                                <span className="font-semibold text-gray-700">WhatsApp</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* --- ICONOS FLOTANTES ORIGINALES --- */}
            <div className={`fixed bottom-4 right-4 z-40 flex flex-col items-center space-y-3 transition-opacity duration-300 ease-in-out ${isContactOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#880af9] via-[#fe057d] to-[#ffa701] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                    <InstagramIcon />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp" className="w-12 h-12 flex items-center justify-center bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                    <WhatsAppIcon />
                </a>
            </div>
        </>
    );
};

// --- HEADER ---
const Header = ({ onContactClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'Menú', href: '#menu' },
        { name: 'Planes', href: '#planes' },
        { name: 'Testimonios', href: '#testimonios' },
        { name: '¿Por qué FitFood?', href: '#porque' },
        { name: 'Contacto', action: onContactClick },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2">
                    <img src={fitfood_icono} alt="Logo de FitFood" className="w-8 h-8" />
                    <span className="text-2xl font-bold text-gray-800">FitFood</span>
                </a>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        link.href ? (
                            <a key={link.name} href={link.href} className="text-gray-600 hover:text-lime-500 transition-colors duration-300">{link.name}</a>
                        ) : (
                            <button key={link.name} onClick={link.action} className="text-gray-600 hover:text-lime-500 transition-colors duration-300">{link.name}</button>
                        )
                    ))}
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    {/*<a href="#" className="bg-white text-black px-4 py-2 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-gray-800 border border-black hover:border-[1.5px]">Ingresar</a>
                    <a href="#" className="bg-gradient-to-br from-yellow-300 via-lime-500 to-lime-700 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-gray-800">Regístrate</a>*/}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white pb-4 px-6">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map(link => (
                            link.href ? (
                                <a key={link.name} href={link.href} className="text-gray-600 hover:text-green-500" onClick={() => setIsOpen(false)}>{link.name}</a>
                            ) : (
                                <button key={link.name} onClick={() => { link.action(); setIsOpen(false); }} className="text-gray-600 hover:text-green-500 text-left">{link.name}</button>
                            )
                        ))}
                        <hr/>
                        {/*<a href="#" className="bg-white text-black px-4 py-2 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-gray-800 border border-black hover:border-[1.5px] text-center">Ingresar</a>
                        <a href="#" className="bg-gradient-to-br from-yellow-300 via-lime-500 to-lime-700 text-white  text-center px-4 py-2 rounded-full hover:bg-green-600 hover:text-gray-800">Regístrate</a>*/}
                    </nav>
                </div>
            )}
        </header>
    );
};

// --- SECCIONES DE CONTENIDO ---
const HeroSection = () => (
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                Come saludable, vive mejor. <br/> Sin complicaciones.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                En FitFood preparamos y entregamos tus comidas de la semana. Planes deliciosos y nutritivos diseñados por expertos para que alcances tus metas.
            </p>
            <a href="#planes" className="bg-gradient-to-br from-yellow-300 via-lime-500 to-lime-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-gray-800 transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block">
                Ver Planes
            </a>
        </div>
    </section>
);

// --- COMPONENTE DEL ITEM DEL MENÚ CORREGIDO ---
const ProductoMenuItem = ({ producto }) => (
    <div className="flex items-start space-x-4 p-4 border-b border-gray-200 last:border-b-0">
        <div className="flex-shrink-0">
            {/* Imagen del producto */}
            {producto.imagen_url ? (
                <img src={producto.imagen_url} alt={producto.nombre} className="w-24 h-24 rounded-md object-cover" />
            ) : (
                <div className="w-24 h-24 rounded-md bg-gray-200"></div>
            )}
            {producto.precio_venta && (
                <p className="font-semibold text-gray-950 mt-2 text-center">{producto.precio_venta}ARS</p>
            )}
        </div>
        <div className="flex-grow">
            <h3 className="font-bold text-lg text-gray-800">{producto.nombre}</h3>
            <p className="text-gray-600 text-sm mt-1">{producto.descripcion}</p>
            {producto.calories && (
                <p className="font-semibold text-gray-950 mt-3">{producto.calories} Calorías</p>
            )}
        </div>
    </div>
);

const TabbedMenuView = ({ menu }) => {
    const categoriasDelMenu = menu.categorias || {};
    const categoriaKeys = Object.keys(categoriasDelMenu);
    const [activeTab, setActiveTab] = useState(categoriaKeys[0]);

    if (categoriaKeys.length === 0) {
        return <p className="text-center text-gray-500">El menú no tiene productos disponibles.</p>;
    }

    return (
        <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8 bg-[#48b148] text-white text-center " >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Tienes que probar</h2>
            </div>
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-2 sm:space-x-6 px-2 sm:px-6 overflow-x-auto" aria-label="Tabs">
                    {categoriaKeys.map(categoriaKey => (
                        <button
                            key={categoriaKey}
                            onClick={() => setActiveTab(categoriaKey)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg sm:text-lg transition-colors duration-200 ${activeTab === categoriaKey ? 'border-[#48b148] text-lime-700' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            {categoriaKey.replace(/_/g, ' ')}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="p-4 sm:p-6">
                {categoriasDelMenu[activeTab] && categoriasDelMenu[activeTab].length > 0 ? (
                    <div className="space-y-4">
                        {categoriasDelMenu[activeTab].map(producto => (
                            <ProductoMenuItem key={producto.id} producto={producto} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 py-8">No hay productos en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

const MealMenuSection = () => {
    const menu = menuData;
    
    if (!menu) return null;

    return (
        <section id="menu" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <TabbedMenuView menu={menu} />
            </div>
        </section>
    );
};

const MealPlanCard = ({ plan, onContactClick }) => {
    // --- Mapas de Estilos para que Tailwind los detecte ---
    const colorVariants = {
        amarillo: 'border-yellow-400',
        verde: 'border-green-500',
        rojo: 'border-red-500',
        purpura: 'border-purple-800',
        default: 'border-gray-400' // Un color por defecto
    };
    const bgColorVariants = {
        amarillo: 'bg-yellow-400',
        verde: 'bg-green-500',
        rojo: 'bg-red-500',
        purpura: 'bg-purple-800',
        default: 'bg-gray-400'
    };
    const textColorVariants = {
        amarillo: 'text-yellow-500', // Clase completa
        verde: 'text-green-500',   // Clase completa
        rojo: 'text-red-500',     // Clase completa
        purpura: 'text-purple-800',
        default: 'text-gray-500'
    };

    // --- Mapa de Íconos ---
    const icons = {
        Zap: Zap,
        Leaf: Leaf,
        Heart: Heart,
        Beef: Beef,
        Star: Star
    };
    
    // --- Lógica para seleccionar los valores correctos ---
    const planColor = plan.color || 'default'; // Usa el color del plan o 'default'
    const IconComponent = icons[plan.icon] || Leaf; // Usa el ícono del plan o Leaf por defecto

    return (
        <div className={`bg-white rounded-xl shadow-lg p-8 flex flex-col border-t-8 ${colorVariants[planColor]} transform hover:-translate-y-2 transition-transform duration-300 h-full`}>
            <div className="flex-grow">
                {/* Ahora usamos la clase de color completa desde nuestro mapa */}
                <IconComponent className={`w-12 h-12 mb-4 ${textColorVariants[planColor]}`} />
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="my-6 text-center">
                    <span className="inline-block bg-green-100 text-green-800 text-lg font-semibold px-4 py-2 rounded-full">
                        {plan.permite_cantidad_personalizada 
                            ? "Personalizado" 
                            : `${plan.cantidad_viandas} Viandas`
                        }
                    </span>
                </div>
            </div>
            <div className="mt-auto">
                {plan.precio ? (
                    <p className="text-4xl font-bold text-gray-800 mb-6">
                        {plan.precio}ARS
                        <span className="text-lg font-normal text-gray-500">
                            {plan.permite_cantidad_personalizada ? "/por vianda" : "/por plan"}
                        </span>
                    </p>
                ) : (
                    <button onClick={onContactClick} className="w-full text-left">
                        <p className="text-2xl font-semibold text-gray-700 mb-6 hover:text-green-600 transition-colors">
                            Consultar Precio
                        </p>
                    </button>
                )}
                
                <button onClick={onContactClick} className={`${bgColorVariants[planColor]} text-black w-full py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300`}>
                    Seleccionar Plan
                </button>
            </div>
        </div>
    );
};
const MealPlansSection = ({ onContactClick }) => {

    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const scrollContainerRef = useRef(null);
    const plans = planesData;

    const checkArrowVisibility = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            checkArrowVisibility();
            container.addEventListener('scroll', checkArrowVisibility);
            window.addEventListener('resize', checkArrowVisibility);
            return () => {
                container.removeEventListener('scroll', checkArrowVisibility);
                window.removeEventListener('resize', checkArrowVisibility);
            };
        }
    }, [plans]);

    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.querySelector('div').clientWidth + 32;
            container.scrollLeft += direction === 'right' ? scrollAmount : -scrollAmount;
        }
    };


    return (
        <section id="planes" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12" >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nuestros Planes</h2>
                    <p className="text-gray-600 mt-2">Elige el plan perfecto para tus objetivos.</p>
                </div>
                <div className="relative">
                    <div ref={scrollContainerRef} className="flex items-stretch overflow-x-auto space-x-8 pb-8 scroll-smooth snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {plans.map(plan => (
                            <div key={plan.id} className="flex-shrink-0 w-80 md:w-96 snap-start">
                                <MealPlanCard plan={plan} onContactClick={onContactClick} />
                            </div>
                        ))}
                    </div>
                    {showLeftArrow && (<button onClick={() => handleScroll('left')} className="absolute top-1/2 left-0 md:-left-4 transform -translate-y-1/2  bg-white rounded-full p-3 shadow-lg z-10 border-2 border-gray-100 hover:bg-gray-100 hover:border-white  transition-transform duration-200 hover:scale-110" aria-label="Anterior"><ChevronLeft className="h-6 w-6 text-gray-800" /></button>)}
                    {showRightArrow && (<button onClick={() => handleScroll('right')} className="absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 border-2 border-gray-100 hover:bg-gray-100 hover:border-white transition-transform duration-200 hover:scale-110" aria-label="Siguiente"><ChevronRight className="h-6 w-6 text-gray-800" /></button>)}
                </div>
            </div>
        </section>
    );
};

// Componente de ayuda para renderizar las estrellas
const StarRating = ({ rating, setRating }) => {
    return (
        <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <button
                        type="button"
                        key={starValue}
                        className={`transition-colors duration-200 ${
                            starValue <= rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        onClick={() => setRating(starValue)}
                        onMouseOver={() => setRating(starValue)}
                    >
                        <Star className="w-8 h-8 fill-current" />
                    </button>
                );
            })}
        </div>
    );
};

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 21.08c-1.53 0-3.03-.4-4.36-1.18l-.31-.18-3.24.85.87-3.17-.2-.33c-.85-1.4-1.31-3-1.31-4.68 0-4.9 3.98-8.88 8.88-8.88 4.9 0 8.88 3.98 8.88 8.88 0 4.9-3.98 8.88-8.88 8.88zm4.43-6.83c-.24-.12-1.45-.72-1.68-.8s-.39-.12-.56.12c-.17.24-.63.8-.78.96-.14.17-.29.19-.53.07s-1.02-.38-1.94-1.2c-.72-.64-1.2-1.45-1.34-1.68-.14-.24-.01-.38.11-.49.11-.11.24-.29.36-.43.12-.14.17-.24.26-.41.09-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.24-.87.85-.87 2.07s.89 2.4.98 2.56c.09.17 1.75 2.67 4.23 3.72.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.56.2-1.04.14-1.16-.07-.12-.24-.19-.48-.31z"/></svg>
);

const WhatsappAvisoModal = ({ isOpen, onClose }) => {
    const whatsappNumber = "5491112345678"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola%2C%20quisiera%20dejar%20una%20rese%C3%B1a%20para%20FitFood.`; 
    
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-150 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`bg-white rounded-lg shadow-xl p-6 w-full max-w-md transition-transform duration-150 ease-in-out ${isOpen ? 'scale-100' : 'scale-95'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">¡Gracias por tu apoyo!</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} /> 
                    </button>
                </div>
                
                <p className="text-gray-700 mb-6">
                    Valoramos mucho tu opinión. Presiona el botón de abajo para enviarnos tu reseña a través de WhatsApp.
                </p>
                
                <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={onClose} 
                    className="flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors w-full"
                >
                    <WhatsAppIcon className="mr-2 h-6 w-6" />
                    Enviar Reseña por WhatsApp
                </a>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    const resenas = resenasData;
    const [showForm, setShowForm] = useState(false); 
    

    return (
        <section id="testimonios" className="py-20 bg-gray-50">
            <WhatsappAvisoModal isOpen={showForm} onClose={() => setShowForm(false)} />

            <div className="container mx-auto px-6">
                
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Lo que dicen nuestros clientes</h2>
                    <p className="text-gray-600 mt-2">Historias reales de personas reales.</p>
                </div>

                {/* Muestra los testimonios estáticos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resenas.map(resena => {
                        const initials = resena.nombre.trim().split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                        const avatarUrl = `https://placehold.co/100x100/E2E8F0/4A5568?text=${initials}`;
                        
                        return (
                            <div key={resena.id} className="bg-white rounded-xl shadow-md p-8 text-center flex flex-col">
                                <img src={avatarUrl} alt={`Avatar de ${resena.nombre}`} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-200" />
                                <div className="flex justify-center mb-4">
                                    {[...Array(resena.calificacion)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                                    {[...Array(5 - resena.calificacion)].map((_, i) => <Star key={i} className="w-5 h-5 text-gray-300 fill-current" />)}
                                </div>
                                <p className="text-gray-700 italic mb-4 flex-grow">"{resena.comentario}"</p>
                                <p className="font-semibold text-gray-900">{resena.nombre}</p>
                                {resena.instagram && <p className="text-sm text-gray-500">@{resena.instagram}</p>}
                            </div>
                        );
                    })}
                </div>
                
                {/* Botón de reseña */}
                <div className="text-center mt-12">
                    <button 
                        onClick={() => setShowForm(true)} 
                        className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                    >
                        Dejar una Reseña
                    </button>
                </div>
            </div>
        </section>
    );
};

const WhyFitFoodSection = () => (
    <section id="porque" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">¿Por qué elegir FitFood?</h2>
                <p className="text-gray-600 mt-2">Te damos más que solo comida.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="feature-item">
                    <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <Leaf className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredientes Frescos</h3>
                    <p className="text-gray-600">Seleccionamos los mejores ingredientes locales y de temporada para garantizar la máxima calidad y sabor en cada plato.</p>
                </div>
                <div className="feature-item">
                    <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <Smile className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Ahorra Tiempo y Esfuerzo</h3>
                    <p className="text-gray-600">Olvida la planificación, las compras y la cocina. Nosotros nos encargamos de todo para que disfrutes de tu tiempo libre.</p>
                </div>
                <div className="feature-item">
                    <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Resultados Reales</h3>
                    <p className="text-gray-600">Nuestros planes están diseñados por nutricionistas para ser efectivos, ayudándote a alcanzar tus metas de salud y bienestar.</p>
                </div>
            </div>
        </div>
    </section>
);
const TerminosPage = () => (
    <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
        <div className="space-y-4 text-gray-700">
            <p><strong>Última actualización:</strong> 28 de julio de 2025</p>
            <p>Bienvenido/a a FitFood. Al acceder o utilizar nuestro servicio, aceptas estar sujeto a estos Términos.</p>
            
            <h2 className="text-2xl font-semibold pt-4">1. Servicios</h2>
            <p>FitFood ofrece la venta y entrega de planes de comida, menús y productos alimenticios individuales ("Productos") a través de nuestro sitio web.</p>
            
            <h2 className="text-2xl font-semibold pt-4">2. Pedidos y Pagos</h2>
            <p>Los precios están expresados en Pesos Argentinos [ARS] e incluyen los impuestos aplicables. Nos reservamos el derecho de modificar los precios en cualquier momento.</p>
            
            <h2 className="text-2xl font-semibold pt-4">3. Entregas</h2>
            <p>Realizamos entregas únicamente en las áreas especificadas en nuestro sitio web. Es responsabilidad del cliente asegurarse de que haya alguien disponible para recibir el pedido.</p>
            <p>Los horarios de entrega son estimados y pueden variar debido a factores externos. Haremos todo lo posible por cumplir con los plazos indicados.</p>
            <p>Es responsabilidad del cliente asegurarse de que haya alguien disponible para recibir el pedido en la dirección y horario acordados.</p>

            <h2 className="text-2xl font-semibold pt-4">4. Reseñas y Contenido del Usuario</h2>
            <p>Al enviar una reseña o cualquier otro contenido a nuestro sitio, nos otorgas una licencia no exclusiva, libre de regalías y perpetua para usar, reproducir y mostrar dicho contenido en relación con nuestro servicio. Eres el único responsable del contenido que publicas.</p>

            <h2 className="text-2xl font-semibold pt-4">5. Propiedad Intelectual</h2>
            <p>Todo el contenido presente en este sitio web, incluyendo textos, gráficos, logos e imágenes, es propiedad de FitFood y está protegido por las leyes de derechos de autor.</p>

            <h2 className="text-2xl font-semibold pt-4">6. Limitación de Responsabilidad</h2>
            <p>FitFood no será responsable por ningún daño indirecto, incidental o consecuente que surja del uso de nuestro servicio o productos.</p>
            
            <h2 className="text-2xl font-semibold pt-4">8. Contacto</h2>
            <p>Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos de cualquier cambio publicando los nuevos Términos en esta página.</p>
            <p>Si tienes alguna pregunta sobre estos Términos, por favor contáctanos a través de contacto@fitfood.com.</p>

        </div>
    </div>
);

const PoliticaPrivacidadPage = () => (
    <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
        <div className="space-y-4 text-gray-700">
            <p><strong>Última actualización:</strong> 28 de julio de 2025</p>
            <p>En FitFood, valoramos tu privacidad y nos comprometemos a proteger tu información personal. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos la información que nos proporcionas.</p>
            
            <h2 className="text-2xl font-semibold pt-4">1. Información que Recopilamos</h2>
            <p>Podemos recopilar la siguiente información:</p>
            <ul className="list-disc list-inside ml-4">
                <li><strong>Información de Contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono y dirección de entrega.</li>
                <li><strong>Información de Reseñas:</strong> Nombre y nombre de usuario de Instagram.</li>
                <li><strong>Información de Pago:</strong> Aunque no almacenamos los detalles completos de tu tarjeta de crédito, recopilamos la información necesaria para procesar los pagos a través de nuestros proveedores de servicios de pago seguros.</li>
                <li><strong>Información Técnica:</strong> Dirección IP, tipo de navegador y datos de uso del sitio web a través de cookies.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold pt-4">2. Cómo Usamos tu Información</h2>
            <p>Utilizamos la información que recopilamos para procesar y entregar tus pedidos, comunicarnos contigo y mejorar nuestro servicio.</p>
            <ul className="list-disc list-inside ml-4">
                <li><strong>Procesar y entregar tus pedidos.</strong></li>
                <li><strong>Comunicarnos contigo sobre tu pedido o consultas.</strong></li>
                <li><strong>Mejorar nuestro sitio web y servicios.</strong></li>
                <li><strong>Mostrar reseñas y testimonios en nuestro sitio (con tu consentimiento implícito al enviarla).</strong></li>
                <li><strong>Enviarte información promocional, si has optado por recibirla.</strong></li>
            </ul>
            <h2 className="text-2xl font-semibold pt-4">3. Cómo Protegemos tu Información</h2>
            <p>Implementamos una variedad de medidas de seguridad para mantener la seguridad de tu información personal. Sin embargo, ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro.</p>

            <h2 className="text-2xl font-semibold pt-4">4. No Compartimos tu Información</h2>
            <p>No vendemos, intercambiamos ni transferimos de ninguna manera tu información personal a terceros, excepto a las partes de confianza que nos asisten en la operación de nuestro sitio web o en la conducción de nuestro negocio (como el servicio de entrega o el procesador de pagos), siempre y cuando dichas partes se comprometan a mantener esta información confidencial.</p>

            <h2 className="text-2xl font-semibold pt-4">5. Tus Derechos</h2>
            <p>Tienes derecho a acceder, rectificar o eliminar tu información personal que tenemos almacenada. Para ejercer estos derechos, por favor contáctanos.</p>

            <h2 className="text-2xl font-semibold pt-4">6. Cambios en Nuestra Política de Privacidad</h2>
            <p>Si decidimos cambiar nuestra política de privacidad, publicaremos esos cambios en esta página.</p>

            <h2 className="text-2xl font-semibold pt-4">7. Contacto</h2>
            <p>Si tienes alguna pregunta sobre esta Política de Privacidad, contáctanos a privacidad@fitfood.com.</p>

        </div>
    </div>
);
// --- COMPONENTE PARA LA PÁGINA PRINCIPAL ---
const HomePage = ({ onContactClick }) => (
    <>
        <HeroSection />
        <MealMenuSection />
        <MealPlansSection onContactClick={onContactClick} />
        <TestimonialsSection />
        <WhyFitFoodSection />
    </>
);


const Footer = () => (
    <footer id="contacto-footer" className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-lg font-semibold mb-4">FitFood</h4>
                    <p className="text-gray-400">Comida saludable, vida feliz. Entregada en tu puerta.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
                    <ul className="space-y-2">
                        <li><a href="#menu" className="text-gray-400 hover:text-white">Menú</a></li>
                        <li><a href="#planes" className="text-gray-400 hover:text-white">Planes</a></li>
                        <li><a href="#testimonios" className="text-gray-400 hover:text-white">Testimonios</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><a href="#/terminos-y-condiciones" className="text-gray-400 hover:text-white">Términos y Condiciones</a></li>
                        <li><a href="#/politica-de-privacidad" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} FitFood. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
);


// --- COMPONENTE PRINCIPAL DE LA APP MODIFICADO ---
export default function App() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(window.location.hash || '#/');

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPage(window.location.hash || '#/');
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case '#/terminos-y-condiciones':
                return <TerminosPage />;
            case '#/politica-de-privacidad':
                return <PoliticaPrivacidadPage />;
            default:
                return <HomePage onContactClick={() => setIsContactOpen(true)} />;
        }
    };

    return (
        <div className="bg-white font-sans">
            <FloatingSocials isContactOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <Header onContactClick={() => setIsContactOpen(true)} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}