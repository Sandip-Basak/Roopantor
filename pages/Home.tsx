import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { MANIFESTO_TEXT, FILMS, THEATRE_PRODUCTIONS } from '../constants';
import { ArrowRight, Film, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

export const Home: React.FC = () => {
  return (
    <PageTransition className="w-full">
      {/* Hero Section */}
      <header className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Roopantor Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-roopantor-black/70 via-roopantor-black/40 to-roopantor-black" />
        </div>
        
        <div className="container relative z-10 px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-block text-roopantor-gold text-sm tracking-[0.4em] uppercase mb-6"
          >
            Onno Shor, Ononno Shilpo
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-roopantor-cream mb-8 leading-tight"
          >
            From Bengal <br />
            <span className="italic text-roopantor-gold">To Bharat</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-2xl mx-auto font-serif text-lg md:text-xl text-roopantor-cream/80 mb-10 leading-relaxed italic"
          >
            "Here, ideas weren’t born, they were awakened."
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <Link to="/film-fest">
                <Button variant="primary">Film Festival</Button>
            </Link>
            <Link to="/theatre">
                <Button variant="outline">Theatre Season</Button>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Manifesto Section */}
      <section className="py-24 md:py-32 bg-roopantor-charcoal relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="font-display text-4xl text-white mb-12">The Manifesto</h2>
            </motion.div>
            
            <div className="font-serif text-xl md:text-2xl leading-loose text-roopantor-cream/90 space-y-8">
              {MANIFESTO_TEXT.split('\n').map((line, i) => (
                <motion.p 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className={i % 2 === 0 ? "text-roopantor-gold" : "text-white"}
                >
                    {line}
                </motion.p>
              ))}
            </div>
            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-12"
            >
                <Link to="/about">
                  <Button variant="secondary">Read Our Story</Button>
                </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Films (Cinema) */}
      <section className="py-24 bg-roopantor-black">
        <div className="container mx-auto px-6">
            <SectionTitle subtitle="In Theatres" title="Film Retrospective" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FILMS.slice(0, 3).map((film, index) => (
                    <motion.div 
                        key={film.id} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        className="group cursor-pointer relative overflow-hidden"
                    >
                        <div className="aspect-[16/9] overflow-hidden mb-6">
                            <img 
                                src={film.image} 
                                alt={film.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                        </div>
                        <div className="flex justify-between items-end border-b border-white/10 pb-4">
                            <div>
                                <h3 className="text-2xl font-display text-white group-hover:text-roopantor-gold transition-colors">{film.title}</h3>
                                <p className="text-sm text-roopantor-cream/60 mt-1 font-serif">{film.category} • {film.director}</p>
                            </div>
                            <ArrowRight className="text-roopantor-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="text-center mt-16">
                <Link to="/film-fest">
                    <Button variant="outline">View Full Schedule</Button>
                </Link>
            </div>
        </div>
      </section>

      {/* Callout Section (Theatre) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
             <img src="https://picsum.photos/1920/1080?grayscale&blur=4" className="w-full h-full object-cover opacity-20" alt="Theatre" />
             <div className="absolute inset-0 bg-roopantor-black/80" />
        </div>
        <div className="container relative z-10 mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2"
            >
                <img src="https://picsum.photos/800/1000?grayscale" alt="Theatre Act" className="w-full h-auto cinematic-shadow border-l-4 border-roopantor-green" />
            </motion.div>
            
            <div className="w-full md:w-1/2">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-roopantor-green uppercase tracking-widest text-xs font-bold mb-4 block"
                >
                    Live On Stage
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="font-display text-5xl text-white mb-6"
                >
                    When A Curtain Rises <br/> In Kolkata
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-serif text-lg text-roopantor-cream/70 mb-8 leading-relaxed"
                >
                    A thousand hearts rise with it. Discover the magic of live theatre with our curated selection of plays that challenge, comfort, and revolutionize.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-4"
                >
                    <div className="flex items-center gap-3 text-roopantor-gold border border-white/10 p-4 bg-white/5 backdrop-blur-sm">
                        <Mic2 size={24} />
                        <div>
                            <span className="block text-2xl font-display">12</span>
                            <span className="text-[10px] uppercase tracking-wider">Plays</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-roopantor-gold border border-white/10 p-4 bg-white/5 backdrop-blur-sm">
                        <Film size={24} />
                        <div>
                            <span className="block text-2xl font-display">25</span>
                            <span className="text-[10px] uppercase tracking-wider">Shows</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="mt-8 inline-block" whileHover={{ scale: 1.05 }}>
                    <Link to="/theatre">
                        <Button>Book Tickets</Button>
                    </Link>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Call for Entries Banner */}
      <section className="py-24 bg-roopantor-gold text-roopantor-black overflow-hidden">
        <div className="container mx-auto px-6 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-6xl mb-6"
            >
                Share Your Voice
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-serif text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-90"
            >
                Are you a filmmaker or a playwright? Roopantor is looking for the next wave of storytellers.
            </motion.p>
            <Link to="/contest">
                <motion.button 
                    whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-roopantor-black text-roopantor-gold px-10 py-4 uppercase tracking-[0.2em] font-bold text-sm transition-all duration-300"
                >
                    Submit Entry
                </motion.button>
            </Link>
        </div>
      </section>
    </PageTransition>
  );
};