import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { FILMS } from '../constants';
import { Clock, ArrowRight, Film } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const FilmFest: React.FC = () => {
    return (
        <PageTransition className="w-full bg-white">
            {/* Hero */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3 }}
                    className="absolute inset-0"
                >
                    <img src="https://picsum.photos/1920/800?grayscale" alt="Film Fest" className="w-full h-full object-cover" />
                    {/* White overlay for theme consistency */}
                    <div className="absolute inset-0 bg-white/80" />
                </motion.div>
                <div className="relative z-10 text-center container px-6">
                    <SectionTitle subtitle="Official Selection" title="Roopantor Film Festival" className="text-roopantor-black" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-2xl mx-auto text-roopantor-textDark font-serif text-xl font-medium italic"
                    >
                        Celebrating cinema that heals, not hurts. A showcase of narratives from Bengal and beyond.
                    </motion.p>
                </div>
            </div>

            {/* Schedule */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 gap-12">
                    {FILMS.map((film, index) => (
                        <motion.div
                            key={film.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white border border-gray-200 p-0 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                        >
                            <div className="w-full md:w-5/12 aspect-video overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                                <img src={film.image} alt={film.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="w-full md:w-7/12 flex flex-col justify-center p-8 md:p-12 relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Film size={100} />
                                </div>

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <span className="border border-roopantor-black px-4 py-1 text-[10px] uppercase tracking-widest font-bold text-roopantor-black">
                                        {film.category}
                                    </span>
                                    <span className="flex items-center gap-2 text-roopantor-black font-sans font-bold text-sm">
                                        <Clock size={16} /> {film.time}
                                    </span>
                                </div>

                                <h3 className="text-4xl font-display text-roopantor-black mb-2 group-hover:text-gray-600 transition-colors">{film.title}</h3>
                                <p className="text-xs uppercase tracking-widest text-roopantor-textLight mb-6 font-bold">Directed by {film.director}</p>
                                <p className="text-roopantor-textDark font-serif text-lg leading-relaxed mb-8">{film.description}</p>

                                <button className="text-left text-roopantor-black text-xs font-bold uppercase tracking-[0.2em] hover:text-gray-600 transition-colors flex items-center gap-3">
                                    View Details <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pass Request Section */}
            <div className="bg-roopantor-charcoal py-24 border-t border-gray-200">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-display text-4xl md:text-5xl text-roopantor-black mb-6"
                    >
                        Get Your Festival Pass
                    </motion.h2>
                    <p className="text-roopantor-textDark mb-12 font-serif text-lg">Access all screenings, panels, and director Q&As.</p>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-3">
                            <label className="text-xs uppercase tracking-widest text-roopantor-textLight font-bold">Full Name</label>
                            <input type="text" className="w-full bg-white border border-gray-300 p-4 text-roopantor-black focus:border-roopantor-black outline-none transition-colors" placeholder="Satyajit Ray" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-xs uppercase tracking-widest text-roopantor-textLight font-bold">Email Address</label>
                            <input type="email" className="w-full bg-white border border-gray-300 p-4 text-roopantor-black focus:border-roopantor-black outline-none transition-colors" placeholder="hello@cinema.com" />
                        </div>
                        <motion.div
                            className="col-span-1 md:col-span-2 mt-8 text-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button variant="primary" fullWidth>Request Pass</Button>
                        </motion.div>
                    </form>
                </div>
            </div>
        </PageTransition>
    );
};