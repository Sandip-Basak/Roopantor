import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { THEATRE_PRODUCTIONS } from '../constants';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { Button } from '../components/Button';
import { PageTransition } from '../components/PageTransition';

export const Theatre: React.FC = () => {
  return (
    <PageTransition className="w-full pt-32 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle 
            subtitle="Season 2024" 
            title="Theatre Schedule" 
            className="mb-20"
        />

        <div className="space-y-24">
            {THEATRE_PRODUCTIONS.map((play, index) => (
                <motion.div 
                    key={play.id} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                >
                    <div className="w-full md:w-5/12 relative group">
                        <div className="absolute inset-0 border-2 border-roopantor-gold translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                        <div className="overflow-hidden">
                            <motion.img 
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.7 }}
                                src={play.image} 
                                alt={play.title} 
                                className="w-full aspect-[3/4] object-cover grayscale relative z-10 transition-all duration-500 group-hover:grayscale-0"
                            />
                        </div>
                    </div>
                    
                    <div className="w-full md:w-7/12 space-y-6">
                        <div className="flex items-center gap-4 text-roopantor-green text-sm font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Calendar size={16} /> {play.date}</span>
                            <span className="w-1 h-1 bg-roopantor-green rounded-full" />
                            <span className="flex items-center gap-2"><MapPin size={16} /> {play.location}</span>
                        </div>
                        
                        <h3 className="text-5xl md:text-6xl font-display text-white leading-none">
                            {play.title}
                        </h3>
                        
                        <p className="text-xl font-serif text-roopantor-cream/70 leading-relaxed max-w-xl">
                            {play.description}
                        </p>
                        
                        <motion.div className="pt-6" whileHover={{ x: 10 }}>
                            <Button variant="primary" className="flex items-center gap-2">
                                <Ticket size={16} /> Book Your Seat
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </PageTransition>
  );
};