import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-roopantor-charcoal border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-3xl text-roopantor-gold mb-6">ROOPANTOR</h3>
            <p className="text-roopantor-cream/60 font-serif leading-relaxed max-w-md italic mb-8">
              "It is where Bengal meets Bharat again, not as state and nation, but as a story and soul."
            </p>
            <div className="flex space-x-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-white hover:text-roopantor-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-roopantor-gold mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Theatre', 'Film Festival', 'Contest', 'About Us'].map((item) => (
                <li key={item}>
                    <NavLink to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-roopantor-cream/60 hover:text-white transition-colors">
                        {item}
                    </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-roopantor-gold mb-6">Contact</h4>
             <ul className="space-y-4 text-sm text-roopantor-cream/60">
               <li>hello@roopantor.art</li>
               <li>+91 98765 43210</li>
               <li>Academy of Fine Arts<br/>2 Cathedral Road<br/>Kolkata, West Bengal</li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-roopantor-cream/40">
          <p>© 2024 Roopantor Art Festival. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};