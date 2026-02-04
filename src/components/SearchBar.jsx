import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, currentQuery, onReset }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        setQuery(currentQuery || '');
    }, [currentQuery]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex gap-3">
            <div className="relative flex-1 group">
                {/* Premium Focus Halo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-500"></div>

                <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm group-focus-within:border-blue-500/50 group-focus-within:shadow-md transition-all duration-300">
                    <div className="pl-4 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        type="text"
                        className="block w-full pl-3 pr-40 py-4 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none font-medium text-sm sm:text-base"
                        placeholder="Search for books, authors, or genres..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    {/* Clear Button */}
                    {query && (
                        <button
                            type="button"
                            onClick={() => {
                                setQuery('');
                                onReset();
                            }}
                            className="absolute right-24 flex items-center justify-center h-8 w-8 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                            title="Clear search"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}

                    {/* Search Button */}
                    <button
                        type="submit"
                        className="absolute right-1.5 h-[calc(100%-12px)] px-6 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 shadow-sm transition-all active:scale-95"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Global Reset Button */}
            {currentQuery && (
                <button
                    type="button"
                    onClick={onReset}
                    className="shrink-0 px-5 flex items-center gap-2 bg-white border border-slate-200 text-slate-600 rounded-2xl hover:bg-slate-50 hover:text-red-600 hover:border-red-100 transition-all font-bold text-sm shadow-sm"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="hidden sm:inline">Reset</span>
                </button>
            )}
        </form>
    );
};

export default SearchBar;
