import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { CheckCircle2 } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const Contest: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

  return (
    <PageTransition className="w-full pt-32 pb-20">
        <div className="container mx-auto px-6">
            <SectionTitle subtitle="Open Call" title="Call for Entries" />
            
            <div className="flex flex-col lg:flex-row gap-16">
                {/* Info & Rules */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-5/12"
                >
                    <div className="bg-roopantor-charcoal p-10 border-l-4 border-roopantor-gold shadow-lg">
                        <h3 className="text-2xl font-display text-white mb-6">Themes & Guidelines</h3>
                        <p className="text-roopantor-cream/70 font-serif mb-8 leading-relaxed">
                            We invite entries that explore the theme "Roopantor: Transformation". 
                            Films must be under 30 minutes. Plays must be one-act formats.
                        </p>
                        
                        <h4 className="text-sm font-bold uppercase tracking-widest text-roopantor-gold mb-4">Rules</h4>
                        <ul className="space-y-4">
                            {[
                                "Original works only",
                                "Completed after Jan 2023",
                                "English subtitles mandatory",
                                "Max file size: 2GB (Link preferred)"
                            ].map((rule, i) => (
                                <motion.li 
                                    key={i} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="flex items-center gap-3 text-roopantor-cream/80 text-sm"
                                >
                                    <CheckCircle2 size={16} className="text-roopantor-green" />
                                    {rule}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="mt-12">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Supported By</h4>
                        <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                             <div className="h-12 w-24 bg-white/20 flex items-center justify-center text-xs">Partner 1</div>
                             <div className="h-12 w-24 bg-white/20 flex items-center justify-center text-xs">Partner 2</div>
                             <div className="h-12 w-24 bg-white/20 flex items-center justify-center text-xs">Partner 3</div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-7/12"
                >
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 md:p-12 border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-roopantor-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-roopantor-cream/60">First Name</label>
                                    <input required type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-roopantor-gold outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-roopantor-cream/60">Last Name</label>
                                    <input required type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-roopantor-gold outline-none transition-colors" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-roopantor-cream/60">Email Address</label>
                                <input required type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-roopantor-gold outline-none transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-roopantor-cream/60">Project Title</label>
                                <input required type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-roopantor-gold outline-none transition-colors" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-roopantor-cream/60">Category</label>
                                    <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-roopantor-gold outline-none transition-colors appearance-none">
                                        <option className="bg-roopantor-black">Short Film</option>
                                        <option className="bg-roopantor-black">Documentary</option>
                                        <option className="bg-roopantor-black">One-Act Play (Script)</option>
                                        <option className="bg-roopantor-black">Experimental Art</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-roopantor-cream/60">Link to Work</label>
                                    <input required type="url" placeholder="Vimeo/YouTube/Drive" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-roopantor-gold outline-none transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-roopantor-cream/60">Synopsis</label>
                                <textarea required rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-roopantor-gold outline-none transition-colors resize-none"></textarea>
                            </div>

                            <div className="pt-4">
                                <Button type="submit" fullWidth>Submit Application</Button>
                                <p className="text-xs text-center mt-4 text-roopantor-cream/40">By submitting, you agree to Roopantor's terms of service.</p>
                            </div>
                        </form>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/5 border border-roopantor-green"
                        >
                            <CheckCircle2 size={64} className="text-roopantor-green mb-6" />
                            <h3 className="text-3xl font-display text-white mb-4">Submission Received</h3>
                            <p className="text-roopantor-cream/80 font-serif mb-8">Thank you for sharing your voice with us. We will review your entry and contact you shortly.</p>
                            <Button variant="outline" onClick={() => setSubmitted(false)}>Submit Another</Button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    </PageTransition>
  );
};