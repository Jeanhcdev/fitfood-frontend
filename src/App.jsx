import React, { useState, useEffect, useRef } from 'react';
import { Smile, Zap, Leaf, Heart, Beef,Star, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import fitfood_icono from './assets/fitfood.svg';

// --- COMPONENTE DE ICONOS SOCIALES ---
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
        <div className="fixed bottom-4 right-4 z-50">
            <div className={`absolute bottom-0 right-0 transition-all duration-300 ease-in-out ${isContactOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
                <div className="bg-white rounded-lg shadow-xl p-4 w-64">
                    <div className="flex justify-between items-center mb-2">
                        <p className="font-bold text-gray-800">Contáctanos</p>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={20} />
                        </button>
                    </div>
                    <ul className="space-y-2">
                        <li>
                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-[#fe057d]">
                                <InstagramIcon /> <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-green-600">
                                <WhatsAppIcon /> <span>WhatsApp</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`absolute bottom-0 right-0 flex flex-col items-center space-y-3 transition-all duration-300 ease-in-out ${isContactOpen ? 'opacity-0 translate-x-16 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#880af9] via-[#fe057d] to-[#ffa701] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                    <InstagramIcon />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp" className="w-12 h-12 flex items-center justify-center bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                    <WhatsAppIcon />
                </a>
            </div>
        </div>
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
                     {/* --- CAMBIO 2: Reducido el espaciado y padding en móviles --- */}
                <nav className="-mb-px flex space-x-2 sm:space-x-6 px-2 sm:px-6 overflow-x-auto" aria-label="Tabs">
                    {categoriaKeys.map(categoriaKey => (
                        <button
                            key={categoriaKey}
                            onClick={() => setActiveTab(categoriaKey)}
                            // --- CAMBIO 2: Reducido el tamaño del texto en móviles ---
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
    const [menu, setMenu] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/menus/destacado/`);
                if (!response.ok) { throw new Error('La respuesta de la red no fue exitosa'); }
                const data = await response.json();
                setMenu(data);
            } catch (err) {
                setError(err.message);
                console.error("Error al obtener el menú:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchMenu();
    }, []);

    if (loading) return <div className="text-center py-20">Cargando Menú...</div>;
    if (error) return <div className="text-center py-20 text-red-500">Error al cargar el menú.</div>;
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
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const scrollContainerRef = useRef(null);

    const checkArrowVisibility = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/planes/`);
                if (!response.ok) { throw new Error('La respuesta de la red no fue exitosa'); }
                const data = await response.json();
                setPlans(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPlans();
    }, []);

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
    }, [plans, loading]);

    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.querySelector('div').clientWidth + 32;
            container.scrollLeft += direction === 'right' ? scrollAmount : -scrollAmount;
        }
    };

    if (loading) return <div className="text-center py-20">Cargando planes...</div>;
    if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;

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
                    {showLeftArrow && (<button onClick={() => handleScroll('left')} className="absolute top-1/2 left-0 md:-left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-gray-100 transition-transform duration-200 hover:scale-110" aria-label="Anterior"><ChevronLeft className="h-6 w-6 text-gray-800" /></button>)}
                    {showRightArrow && (<button onClick={() => handleScroll('right')} className="absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-gray-100 transition-transform duration-200 hover:scale-110" aria-label="Siguiente"><ChevronRight className="h-6 w-6 text-gray-800" /></button>)}
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


// Componente principal del formulario de reseña
const FormularioResena = ({ onSubmit, onClose }) => {
    const [nombre, setNombre] = useState('');
    const [instagram, setInstagram] =useState('');
    const [comentario, setComentario] = useState('');
    const [calificacion, setCalificacion] = useState(0);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (calificacion === 0) {
            setError('Por favor, selecciona una calificación.');
            return;
        }
        setError('');
        // Llama a la función onSubmit que le pasaremos desde el componente padre
        onSubmit({ nombre, instagram, comentario, calificacion });
    };

    return (
        // Modal o Pop-up
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">Deja tu Reseña</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Tu Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">Tu Instagram (Opcional)</label>
                            <input
                                type="text"
                                id="instagram"
                                value={instagram}
                                onChange={(e) => setInstagram(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="@usuario"
                            />
                        </div>
                        <div>
                            <label htmlFor="comentario" className="block text-sm font-medium text-gray-700 mb-1">Tu Comentario</label>
                            <textarea
                                id="comentario"
                                value={comentario}
                                onChange={(e) => setComentario(e.target.value)}
                                rows="4"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 text-center">Calificación</label>
                            <StarRating rating={calificacion} setRating={setCalificacion} />
                        </div>
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 transition-colors"
                        >
                            Enviar Reseña
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const SuccessMessage = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">¡Gracias!</h3>
            <p className="text-gray-700 mb-6">Tu reseña ha sido enviada y será revisada por nuestro equipo.</p>
            <button
                onClick={onClose}
                className="bg-green-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600 transition-colors"
            >
                Cerrar
            </button>
        </div>
    </div>
);



// --- NUEVA FUNCIÓN DE AYUDA para generar iniciales ---
const getInitials = (name) => {
    if (!name) return '??';
    const words = name.trim().split(' ');
    if (words.length > 1) {
        return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
};


// --- PASO 3: Reemplaza tu TestimonialsSection actual con esta nueva versión ---
const TestimonialsSection = () => {
    const [resenas, setResenas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Estados para controlar los pop-ups
    const [showForm, setShowForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Función para obtener las reseñas aprobadas de la API
    const fetchResenas = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/reseñas/`);
            if (!response.ok) {
                throw new Error('No se pudieron cargar las reseñas.');
            }
            const data = await response.json();
            setResenas(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect para cargar las reseñas cuando el componente se monta
    useEffect(() => {
        fetchResenas();
    }, []);

    // Función para manejar el envío del formulario
    const handleReviewSubmit = async (formData) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/reseñas/crear/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Hubo un problema al enviar tu reseña.');
            }
            
            // Cierra el formulario y muestra el mensaje de éxito
            setShowForm(false);
            setShowSuccess(true);
            
        } catch (err) {
            console.error(err);
            alert(err.message); // Muestra un alerta si hay un error
        }
    };

    return (
        <section id="testimonios" className="py-20 bg-gray-50">
            {/* Renderizado condicional de los pop-ups */}
            {showForm && <FormularioResena onSubmit={handleReviewSubmit} onClose={() => setShowForm(false)} />}
            {showSuccess && <SuccessMessage onClose={() => setShowSuccess(false)} />}

            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Lo que dicen nuestros clientes</h2>
                    <p className="text-gray-600 mt-2">Historias reales de personas reales.</p>
                </div>

                {/* Muestra un mensaje mientras carga o si hay un error */}
                {loading && <p className="text-center">Cargando testimonios...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                
                {/* Muestra los testimonios si no está cargando y no hay error */}
                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resenas.map(resena => {
                            // Generamos las iniciales y la URL del avatar aquí
                            const initials = getInitials(resena.nombre);
                            const avatarUrl = `https://placehold.co/100x100/E2E8F0/4A5568?text=${initials}`;

                            return (
                                <div key={resena.id} className="bg-white rounded-xl shadow-md p-8 text-center flex flex-col">
                                    {/* Usamos la nueva URL del avatar */}
                                    <img src={avatarUrl} alt={`Avatar de ${resena.nombre}`} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-200" />
                                    <div className="flex justify-center mb-4">
                                        {[...Array(resena.calificacion)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                                        {[...Array(5 - resena.calificacion)].map((_, i) => <Star key={i} className="w-5 h-5 text-gray-300 fill-current" />)}
                                    </div>
                                    <p className="text-gray-600 italic mb-4 flex-grow">"{resena.comentario}"</p>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{resena.nombre}</h4>
                                        {resena.instagram && <p className="text-sm text-pink-500 mt-1">@{resena.instagram}</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                
                {/* Botón para abrir el formulario */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-[#48b148] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                        Deja tu Reseña
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

const Footer = () => (
    <footer id="contacto-footer" className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-4">
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
                        <li><a href="#" className="text-gray-400 hover:text-white">Términos y Condiciones</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 border-t border-gray-700 pt-4 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} FitFood. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
);

// --- COMPONENTE PRINCIPAL DE LA APP ---
export default function App() {
const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="bg-white font-sans">
            <FloatingSocials isContactOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <Header onContactClick={() => setIsContactOpen(true)} />
            <main>
                <HeroSection />
                <MealMenuSection />
                <MealPlansSection onContactClick={() => setIsContactOpen(true)} />
                <TestimonialsSection />
                <WhyFitFoodSection />
            </main>
        <Footer />
        </div>
);
}
