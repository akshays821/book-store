import React from 'react';

const BookCard = ({ book, onViewDetails }) => {
    const { volumeInfo } = book;
    const thumbnail = volumeInfo.imageLinks?.thumbnail || volumeInfo.imageLinks?.smallThumbnail;
    const title = volumeInfo.title || 'Untitled';
    const authors = volumeInfo.authors ? volumeInfo.authors.slice(0, 1).join(', ') : 'Unknown Author';
    const averageRating = volumeInfo.averageRating || (Math.random() * 1.5 + 3.5).toFixed(1); // Real rating or high-quality mock
    const ratingsCount = volumeInfo.ratingsCount || Math.floor(Math.random() * 100 + 10);

    const price = (title.length * 0.5 + 10).toFixed(2);

    return (
        <div className="group bg-gradient-to-br from-indigo-50/80 to-white border border-indigo-100 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 hover:border-indigo-400 relative">
            {/* Image Area with alive background - Height reduced for density */}
            <div className="h-44 sm:h-52 bg-white/60 flex items-center justify-center p-3 sm:p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {thumbnail ? (
                    <img
                        src={thumbnail}
                        alt={title}
                        className="h-full object-contain shadow-sm group-hover:scale-105 transition-transform duration-500 z-10"
                    />
                ) : (
                    <div className="h-full w-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-300 rounded-lg">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                )}
            </div>

            {/* Content - Compacted */}
            <div className="p-3 sm:p-4 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-1">
                    <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < Math.floor(averageRating) ? 'fill-current' : 'text-gray-200'}`} viewBox="0 0 20 20 fill='currentColor'"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium hidden xs:inline">({ratingsCount})</span>
                </div>

                <h3 className="font-bold text-gray-900 leading-tight line-clamp-2 mb-1 text-xs sm:text-sm group-hover:text-blue-600 transition-colors" title={title}>
                    {title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">by {authors}</p>

                <div className="mt-auto flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-100">
                    <div className="flex flex-col">
                        <span className="font-extrabold text-gray-900 text-sm sm:text-base">${price}</span>
                    </div>
                    <button
                        onClick={() => onViewDetails(book)}
                        className="p-1.5 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-blue-100"
                    >
                        <span className="hidden sm:inline">Details</span>
                        <span className="sm:hidden">Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProductGrid = ({ products, onViewDetails }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
            {products.map((book) => (
                <BookCard key={book.id} book={book} onViewDetails={onViewDetails} />
            ))}
        </div>
    );
};

export default ProductGrid;
