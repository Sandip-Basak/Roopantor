import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { TEAM } from '../constants';
import { PageTransition } from '../components/PageTransition';

export const About: React.FC = () => {
  return (
    <PageTransition className="w-full bg-white">
      {/* Brand Hero */}
      <div className="pt-32 pb-20 container mx-auto px-6 text-center">
        <motion.img 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            src="https://picsum.photos/100/100?grayscale" 
            alt="Logo Mark" 
            className="mx-auto rounded-full w-24 h-24 mb-8 border-2 border-roopantor-black p-1 shadow-md" 
        />
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-display text-5xl md:text-7xl text-roopantor-black mb-8"
        >
            Onno Shor<br/>Ononno Shilpo
        </motion.h1>
        <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-roopantor-black mx-auto mb-12" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {['New Perspective', 'The Overlooked', 'Unity in Art'].map((title, i) => (
                <motion.div 
                    key={title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (i * 0.2), duration: 0.8 }}
                    className="p-8 border border-gray-200 hover:border-roopantor-black transition-colors duration-500 hover:bg-gray-50 hover:shadow-lg"
                >
                    <h3 className="text-xl font-display text-roopantor-black mb-4">{title}</h3>
                    <p className="font-serif text-roopantor-textLight">
                        {i === 0 && "Revealing forgotten stories and hidden contexts behind timeless works."}
                        {i === 1 && "Giving space to underrepresented talent and emerging artists from the fringes."}
                        {i === 2 && "Using art to transcend divisions and celebrate shared humanity."}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>

      {/* History / Inspiration */}
      <section className="py-20 bg-roopantor-charcoal">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2"
              >
                   <SectionTitle align="left" subtitle="Our Inspiration" title="The New Bharat Mata" />
                   <p className="font-serif text-lg text-roopantor-textLight mb-6 leading-relaxed">
                       Inspired by Abanindranath Tagore's 1905 masterpiece, we reinterpret the visual tone of saffron warmth, grace, and divinity for a new era. 
                   </p>
                   <p className="font-serif text-lg text-roopantor-textLight leading-relaxed">
                       Roopantor represents the idea of India as art, empathy, and awakening rather than just iconography. It is where the east becomes light again.
                   </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                  <div className="relative p-4 border border-black/10 bg-white shadow-xl">
                      <div className="absolute top-0 left-0 w-full h-full bg-black/5 mix-blend-overlay pointer-events-none" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bharat_Mata_by_Abanindranath_Tagore.jpg/500px-Bharat_Mata_by_Abanindranath_Tagore.jpg" alt="Bharat Mata" className="max-h-[500px] w-auto transition-all duration-1000 grayscale" />
                  </div>
              </motion.div>
          </div>
      </section>

      {/* People of Roopantor */}
      {/* Requirement: 2664x984 dimension for section container - using full width container which approximates this feeling */}
      <section className="py-24 container mx-auto px-6">
        <SectionTitle subtitle="The Team" title="People of Roopantor" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM.map((member, index) => (
                <motion.div 
                    key={member.id} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="text-center group"
                >
                    <div className="relative mb-6 mx-auto w-64 h-80 overflow-hidden shadow-lg border-2 border-transparent group-hover:border-roopantor-black transition-all">
                         <div className="absolute inset-0 bg-black mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                         <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <h3 className="text-2xl font-display text-roopantor-black mb-2">{member.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">{member.role}</p>
                    {member.bio && (
                        <p className="text-sm font-serif text-roopantor-textLight max-w-xs mx-auto italic">"{member.bio}"</p>
                    )}
                </motion.div>
            ))}
        </div>
      </section>
    </PageTransition>
  );
};