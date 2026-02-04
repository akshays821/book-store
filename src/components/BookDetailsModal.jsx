import React from 'react';

const BookDetailsModal = ({ book, onClose }) => {
    if (!book) return null;

    const { volumeInfo } = book;
    const thumbnail = volumeInfo.imageLinks?.thumbnail || volumeInfo.imageLinks?.smallThumbnail;
    const description = volumeInfo.description?.replace(/<[^>]*>?/gm, '') || 'No description available for this book.';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <h2 className="font-bold text-gray-900 truncate pr-8">{volumeInfo.title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left: Image & Quick Stats */}
                        <div className="w-full md:w-1/3 flex flex-col items-center">
                            <div className="w-32 md:w-full bg-white/60 rounded-lg overflow-hidden shadow-sm flex items-center justify-center mb-4 p-2">
                                {thumbnail ? (
                                    <img src={thumbnail} alt={volumeInfo.title} className="w-full h-auto object-contain max-h-[180px] md:max-h-none" />
                                ) : (
                                    <div className="text-gray-300 text-xs italic py-10">No Image</div>
                                )}
                            </div>
                            <div className="w-full space-y-2">
                                <div className="p-2 bg-blue-50 rounded-lg text-center">
                                    <span className="block text-[10px] text-blue-400 font-bold uppercase tracking-wider">Pages</span>
                                    <span className="text-blue-700 font-bold">{volumeInfo.pageCount || '---'}</span>
                                </div>
                                <div className="p-2 bg-gray-50 rounded-lg text-center">
                                    <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Language</span>
                                    <span className="text-gray-700 font-bold uppercase">{volumeInfo.language || '---'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className="w-full md:w-2/3 space-y-6">
                            <div>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">
                                    {volumeInfo.title}
                                </h3>
                                <p className="text-blue-600 font-bold">
                                    {volumeInfo.authors?.join(', ') || 'Unknown Author'}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase">
                                        {volumeInfo.categories?.[0] || 'Uncategorized'}
                                    </span>
                                    <span className="text-gray-400 text-xs">Published: {volumeInfo.publishedDate?.split('-')[0] || 'Unknown'}</span>
                                </div>
                                <div className="prose prose-sm text-gray-600 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                                    {description}
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                                <div>
                                    <span className="block text-xs text-gray-400">Retail Price</span>
                                    <span className="text-3xl font-black text-gray-900">${(volumeInfo.title.length * 0.5 + 10).toFixed(2)}</span>
                                </div>
                                <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
                                    Add to Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsModal;
