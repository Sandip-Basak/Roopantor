import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { MANIFESTO_TEXT, FILMS, THEATRE_PRODUCTIONS } from '../constants';
import { ArrowRight, Film, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const HERO_SLIDES = [
    {
        type: 'image',
        src: '/images/cr1.jpg',
        title: {
            main: 'Roopantor Art',
            highlight: 'Festival'
        },
        quote: 'Here, ideas awaken, returning us to the art that unites',
        buttons: [
            {
                label: 'Film Festival',
                link: '/coming-soon',
                // link: '/film-fest',
                variant: 'secondary',
                className: 'bg-white text-black hover:bg-gray-200 hover:text-black border-none'
            },
            {
                label: 'Theatre Season',
                link: '/theatre',
                variant: 'outline',
                className: 'text-white border-white hover:bg-white hover:!text-black'
            }
        ]
    },
    {
        type: 'image',
        src: '/images/cr2.jpg',
        title: {
            main: 'Rongheen Film',
            highlight: 'Collective'
        },
        quote: 'Send in your film entries and make your creative voice heard.',
        buttons: [
            {
                label: 'Submit Entry',
                link: '/coming-soon',
                // link: '/contest',
                variant: 'secondary',
                className: 'bg-white text-black hover:bg-gray-200 hover:text-black border-none'
            }
        ]
    },
    {
        type: 'image',
        src: '/images/cr3.jpg',
        title: {
            main: 'From Bengal ',
            highlight: 'To Bharat'
        },
        quote: '"Where the east becomes light again. Where art remembers its origin. Where India rediscovers her creative soul."',
        buttons: [
            {
                label: 'Watch Film',
                link: '/coming-soon',
                // link: '/contest',
                variant: 'secondary',
                className: 'bg-white text-black hover:bg-gray-200 hover:text-black border-none'
            }
        ]
    },
    // {
    //     type: 'video',
    //     // Added params: autoplay, mute, controls=0, loop, playlist (required for loop), playsinline, no branding
    //     src: 'https://www.youtube.com/embed/mo6qPIGtQ6I?autoplay=1&mute=1&controls=0&loop=1&playlist=mo6qPIGtQ6I&playsinline=1&showinfo=0&rel=0&iv_load_policy=3'
    // },
    {
        type: 'image',
        src: '/images/cr4.jpg',
        title: {
            main: 'Roopantor',
            highlight: 'Theatre Festival'
        },
        quote: 'Roopantar is thrilled to partner with the esteemed Indian Museum for the upcoming Bongiyo Natyo Utsav.',
        buttons: [
            {
                label: 'Book Your Seats Now',
                link: '/theatre',
                variant: 'secondary',
                className: 'bg-white text-black hover:bg-gray-200 hover:text-black border-none'
            }
        ]
    }
];

export const Home: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const currentHero = HERO_SLIDES[currentSlide];

    return (
        <PageTransition className="w-full">
            {/* Hero Section */}
            <header className="relative min-h-screen md:h-[85vh] md:min-h-[600px] flex items-start md:items-center justify-center overflow-hidden bg-roopantor-black">
                <div className="absolute inset-0 z-0 bg-black aspect-[2664/984]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {currentHero.type === 'image' ? (
                                <img
                                    src={currentHero.src}
                                    className="w-full h-full object-cover"
                                    alt="Hero Slide"
                                />
                            ) : (
                                <div className="w-full h-full relative overflow-hidden">
                                    {/* Scale up iframe to ensure it covers the area without black bars usually found in 16:9 embeds */}
                                    <iframe
                                        src={currentHero.src}
                                        className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        title="Background Video"
                                    />
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Dark Overlay for Light Text */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10" />
                </div>

                <div className="container relative z-20 px-6 text-left pt-40 md:pt-0 pb-24 md:pb-0">
                    <AnimatePresence mode="wait">
                        <div key={currentSlide}>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-tight"
                            >
                                {currentHero.title?.main} <br />
                                <span className="italic font-serif text-white">{currentHero.title?.highlight}</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="max-w-xl font-serif text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed italic"
                            >
                                {currentHero.quote}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col md:flex-row justify-start gap-6"
                            >
                                {currentHero.buttons?.map((btn, idx) => (
                                    <Link key={idx} to={btn.link}>
                                        <Button variant={btn.variant as any} className={btn.className}>
                                            {btn.label}
                                        </Button>
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    </AnimatePresence>
                </div>
            </header>

            {/* Manifesto Section */}
            {/* Requirement: Manifesto Video Cover Image 2664x984 */}
            <section className="py-24 bg-white relative border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <SectionTitle subtitle="Our Philosophy" title="The Manifesto" />
                        </motion.div>

                        {/* <div className="font-serif text-xl md:text-2xl leading-loose text-roopantor-textDark space-y-6">
              {MANIFESTO_TEXT.split('\n').map((line, i) => (
                <motion.p 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className={i % 2 === 0 ? "text-roopantor-black font-semibold" : "text-roopantor-textLight"}
                >
                    {line}
                </motion.p>
              ))}
            </div> */}
                    </div>

                    {/* Manifesto Cover Image (2664x984) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full relative aspect-video overflow-hidden shadow-2xl border-4 border-white"
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Zll1o3C9lCw?si=FKcPfI52-gsTixDZ&autoplay=1&mute=1&controls=0&loop=1&playlist=Zll1o3C9lCw&playsinline=1&showinfo=0&rel=0&iv_load_policy=3"
                            title="Manifesto Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </motion.div>
                </div>
            </section>

            {/* Featured Films (Content Section) */}
            {/* Requirement: 820x510 images (3 images) */}
            <section className="py-24 bg-roopantor-charcoal">
                <div className="container mx-auto px-6">
                    <SectionTitle subtitle="In Theatres" title="Theatre Schedule" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {FILMS.slice(0, 3).map((film, index) => (
                            <motion.div
                                key={film.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className="group cursor-pointer flex flex-col h-full"
                            >
                                {/* 820x510 dimension enforced by aspect ratio */}
                                <div className="aspect-[820/510] overflow-hidden mb-8 shadow-sm bg-white relative">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                                    <img
                                        src={`/images/f${index + 1}.jpg`}
                                        alt={film.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <div className="flex-grow flex flex-col justify-between border-t border-black pt-6">
                                    <div>
                                        <h3 className="text-2xl font-display text-roopantor-black mb-2 group-hover:text-gray-600 transition-colors">{film.title}</h3>
                                        <p className="text-xs uppercase tracking-widest text-roopantor-textLight font-bold mb-3">{film.category}</p>
                                        <p className="text-sm text-roopantor-textLight font-serif italic">Dir. {film.director}</p>
                                    </div>
                                    <div className="mt-6 flex justify-end">
                                        <ArrowRight className="text-roopantor-black transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Link to="/theatre">
                            <Button variant="outline">View Full Schedule</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Callout Section (Theatre) */}
            {/* Updated to be fully responsive with min-height instead of fixed aspect ratio. Dark Theme. */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 aspect-[2652/1092]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full min-h-[600px] h-auto overflow-hidden shadow-2xl group flex items-center bg-black"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img src="/images/art.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" alt="Theatre Banner" />
                        </div>

                        {/* Gradient Overlay - Dark for contrast */}
                        <div className="absolute inset-0 bg-black/40 z-10" />
                        {/* <div className="absolute inset-0 bg-black/90 md:bg-gradient-to-r md:from-black md:via-black/90 md:to-transparent z-10" /> */}

                        <div className="relative z-20 w-full p-8 md:p-16 py-16">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="text-left md:pl-16">
                                    <motion.span
                                        className="inline-block border-b border-white pb-1 text-white uppercase tracking-widest text-xs font-bold mb-6"
                                    >
                                        Film Contest
                                    </motion.span>
                                    <motion.h2
                                        className="font-display text-4xl md:text-6xl text-white mb-6 leading-tight"
                                    >
                                        Rongheen Film Collective
                                    </motion.h2>
                                    <motion.p
                                        className="font-serif text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-md"
                                    >
                                        Roopantor Art Festival celebrates unheard voices and fresh artistic visions. Send in your entries and let your creative voice be heard.
                                    </motion.p>
                                    <Link to="/coming-soon">
                                        <Button variant="secondary" className="bg-white text-black hover:bg-gray-200 border-none">Know More</Button>
                                    </Link>
                                </div>

                                <div className="flex flex-row justify-center md:justify-end gap-6 md:gap-8 pr-0 md:pr-16">
                                    {/* Inverted Colors: Plays box is now Black bg, White text */}
                                    <div className="bg-roopantor-black p-6 md:p-8 shadow-xl border border-gray-800 text-center w-32 md:w-40 aspect-square flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
                                        <Mic2 size={24} className="mb-2 md:mb-4 text-white" />
                                        <span className="block text-2xl md:text-4xl font-display text-white font-bold">12</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1 md:mt-2">Plays</span>
                                    </div>
                                    {/* Shows box is now White bg, Black text for contrast */}
                                    <div className="bg-white p-6 md:p-8 shadow-xl border border-gray-100 text-center w-32 md:w-40 aspect-square flex flex-col justify-center items-center text-roopantor-black hover:-translate-y-2 transition-transform duration-300 md:mt-12">
                                        <Film size={24} className="mb-2 md:mb-4 text-roopantor-black" />
                                        <span className="block text-2xl md:text-4xl font-display text-roopantor-black font-bold">25</span>
                                        <span className="text-[10px] uppercase tracking-widest text-roopantor-textLight mt-1 md:mt-2">Shows</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call for Entries Banner */}
            {/* Updated to be responsive with min-height and flexible padding. Now with dark image background */}
            {/* <section className="py-24 bg-roopantor-charcoal">
        <div className="container mx-auto px-6 aspect-[2652/1184]">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-full min-h-[500px] h-auto py-24 md:py-12 overflow-hidden flex items-center justify-center text-center px-6 md:px-12 shadow-2xl"
            >
                
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/entries.jpg" 
                        alt="Call for Entries Background" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" /> 
                    <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-4 border border-white/20"></div>
                </div>

                <div className="relative z-10 max-w-3xl">
                    <h2 className="font-display text-4xl md:text-7xl mb-6 md:mb-8 text-white leading-tight">
                        Share Your Voice
                    </h2>
                    <p className="font-serif text-lg md:text-2xl mx-auto mb-10 md:mb-12 text-white/80 font-light px-4">
                        Are you a filmmaker or a playwright? Roopantor is looking for the next wave of storytellers.
                    </p>
                    <Link to="/contest">
                        <Button variant="secondary" className="bg-white text-black hover:bg-gray-200 border-none">
                            Submit Entry
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
      </section> */}
        </PageTransition>
    );
};