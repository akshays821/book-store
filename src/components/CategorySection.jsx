import React from 'react';

const CategorySection = ({ categories, activeCategory, onSelect }) => {
    return (
        <div className="flex overflow-x-auto overflow-y-hidden no-scrollbar gap-3 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeCategory === cat
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-100'
                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-blue-200'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategorySection;
