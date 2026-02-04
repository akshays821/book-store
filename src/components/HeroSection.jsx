import React from 'react';

const HeroSection = () => {
    return (
        <div className="w-full relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg">
            {/* Simple Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

            <div className="relative z-10 px-6 py-10 sm:py-12 sm:px-10 flex flex-col items-start text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
                    Your Next Great Read
                </h2>
                <p className="text-blue-100 text-sm sm:text-base max-w-xl leading-relaxed">
                    Explore our curated collection of books from around the globe.
                    Classics, bestsellers, and hidden gems.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
