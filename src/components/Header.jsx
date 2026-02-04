import React from 'react';
import { BookOpen } from "lucide-react";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-indigo-50/90 backdrop-blur-md border-b border-indigo-200 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-2">
                {/* Logo & Tagline Integrated */}
                <div className="flex flex-col gap-0 cursor-pointer group" onClick={() => window.location.reload()}>
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
                            <BookOpen className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-black text-indigo-900 tracking-widest uppercase italic">
                            BOOK<span className="text-blue-600">HAVEN</span>
                        </span>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] ml-1">
                        Smart Reading, Powered by AI
                    </span>
                </div>

                {/* Branding Center Text */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <p className="text-[10px] font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 uppercase tracking-[0.3em] opacity-80">
                        Explore the World of Knowledge
                    </p>
                </div>

                {/* Nav Actions - Simplified */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex text-[10px] font-bold text-indigo-500 bg-indigo-100/50 px-3 py-1 rounded-full border border-indigo-200 uppercase tracking-wider">
                        Live Collection
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
