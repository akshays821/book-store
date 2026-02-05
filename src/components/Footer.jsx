import React from 'react';
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1c1c1c] border-t border-white/[0.08] pt-12 pb-12 relative z-50 overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Unified Footer Branding (Top Row) */}
                <div className="mb-12 pb-8 border-b border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-blue-600 rounded-lg">
                            <BookOpen className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-black text-white tracking-widest uppercase italic">
                            BOOK<span className="text-blue-500">HAVEN</span>
                        </span>
                    </div>
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] ml-1">
                        Smart Reading, Powered by AI
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 items-start">

                    {/* Column 1: Personal Details */}
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] opacity-40">Personal Details</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://github.com/akshays821" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-400 hover:text-blue-400 transition-all text-sm font-bold group">
                                    <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-blue-900/40 transition-colors">
                                        <Github size={18} />
                                    </div>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/akshay-shaji-418385361" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-400 hover:text-blue-400 transition-all text-sm font-bold group">
                                    <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-blue-900/40 transition-colors">
                                        <Linkedin size={18} />
                                    </div>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="mailto:akshayshaji821@gmail.com" className="flex items-center gap-4 text-neutral-400 hover:text-blue-400 transition-all text-sm font-bold group">
                                    <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-blue-900/40 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    akshayshaji821@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Specific Navigation (Aligned with Details) */}
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] opacity-40">Navigation</h3>
                        <ul className="space-y-5">
                            <li>
                                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-neutral-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-3 group">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></span>
                                    Explore Library
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => { e.preventDefault(); }} className="text-neutral-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-3 group">
                                    <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full group-hover:scale-150 transition-transform"></span>
                                    Categories
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => { e.preventDefault(); }} className="text-neutral-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-3 group">
                                    <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full group-hover:scale-150 transition-transform"></span>
                                    Fiction Books
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright Row */}
                <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                    <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-[0.2em]">
                        © 2025 BookHaven • Core Selection
                    </p>
                    <span className="text-[10px] text-neutral-800 font-black italic uppercase tracking-wider">
                        Premium Developer Suite
                    </span>
                </div>
            </div>
        </footer>
    );
}
