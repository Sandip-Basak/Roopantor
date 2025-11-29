import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { FILMS } from '../constants';
import { Clock } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const FilmFest: React.FC = () => {
  return (
    <PageTransition className="w-full bg-roopantor-black">
        {/* Hero */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3 }}
                className="absolute inset-0"
            >
                <img src="https://picsum.photos/1920/800?grayscale" alt="Film Fest" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-roopantor-black to-transparent" />
            </motion.div>
            <div className="relative z-10 text-center container px-6">
                <SectionTitle subtitle="Official Selection" title="Roopantor Film Festival" />
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto text-roopantor-cream/70 font-serif text-lg"
                >
                    Celebrating cinema that heals, not hurts. A showcase of narratives from Bengal and beyond.
                </motion.p>
            </div>
        </div>

        {/* Schedule */}
        <div className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 gap-8">
                {FILMS.map((film, index) => (
                    <motion.div 
                        key={film.id} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="bg-white/5 border border-white/10 p-8 flex flex-col md:flex-row gap-8 hover:bg-white/10 transition-colors group"
                    >
                        <div className="w-full md:w-1/3 aspect-video overflow-hidden">
                             <img src={film.image} alt={film.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-roopantor-green/20 text-roopantor-green px-3 py-1 text-xs uppercase tracking-widest font-bold">
                                    {film.category}
                                </span>
                                <span className="flex items-center gap-2 text-roopantor-gold font-sans font-bold">
                                    <Clock size={16} /> {film.time}
                                </span>
                            </div>
                            <h3 className="text-3xl font-display text-white mb-2">{film.title}</h3>
                            <p className="text-sm uppercase tracking-widest text-roopantor-cream/50 mb-4">Directed by {film.director}</p>
                            <p className="text-roopantor-cream/70 font-serif mb-6">{film.description}</p>
                            <button className="text-left text-roopantor-gold text-xs font-bold uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-2">
                                View Details <motion.span whileHover={{ x: 5 }}>&rarr;</motion.span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Pass Request Section */}
        <div className="bg-roopantor-charcoal py-20 border-t border-white/10">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-display text-4xl text-white mb-6"
                >
                    Get Your Festival Pass
                </motion.h2>
                <p className="text-roopantor-cream/60 mb-10 font-serif">Access all screenings, panels, and director Q&As.</p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-roopantor-gold">Full Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/20 p-4 text-white focus:border-roopantor-gold outline-none transition-colors" placeholder="Satyajit Ray" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-roopantor-gold">Email Address</label>
                        <input type="email" className="w-full bg-white/5 border border-white/20 p-4 text-white focus:border-roopantor-gold outline-none transition-colors" placeholder="hello@cinema.com" />
                    </div>
                     <motion.div 
                        className="col-span-1 md:col-span-2 mt-4 text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                     >
                        <Button fullWidth>Request Pass</Button>
                    </motion.div>
                </form>
            </div>
        </div>
    </PageTransition>
  );
};