import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

export const ComingSoon: React.FC = () => {
    return (
        <PageTransition className="w-full h-screen flex items-center justify-center bg-roopantor-charcoal">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionTitle subtitle="Stay Tuned" title="Coming Soon" />
                    <p className="max-w-2xl mx-auto text-roopantor-textDark font-serif text-xl font-medium italic mb-12">
                        We are working on something extraordinary. Check back soon.
                    </p>
                    <Link to="/">
                        <Button variant="primary">Return Home</Button>
                    </Link>
                </motion.div>
            </div>
        </PageTransition>
    );
};
