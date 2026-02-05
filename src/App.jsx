import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import SearchAnimation from './components/SearchAnimation';
import BookDetailsModal from './components/BookDetailsModal';

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
const ITEMS_PER_PAGE = 12;
const CATEGORIES = ['Fiction', 'Technology', 'Design', 'History', 'Business'];

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Fiction');
  const [searchQuery, setSearchQuery] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const fetchBooks = async (retryCount = 0) => {
      setLoading(true);
      setError(null);

      try {
        let q = '';
        if (searchQuery.trim()) {
          q = searchQuery;
        } else if (activeCategory) {
          q = `subject:${activeCategory}`;
        } else {
          q = 'subject:Fiction';
        }

        if (!q) return;

        // Using Encoded URI + API Key
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=${ITEMS_PER_PAGE}&startIndex=${startIndex}&key=${API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
          // Retry logic for 503 (Server Error) or 429 (Rate Limit) logic
          if ((response.status === 503 || response.status === 500) && retryCount < 2) {
            console.log(`Retrying... (${retryCount + 1})`);
            setTimeout(() => {
              if (isMounted) fetchBooks(retryCount + 1);
            }, 1500); // Wait 1.5s and retry
            return; 
          }

          throw new Error(`Google API: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setBooks(data.items || []);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Fetch error:", error);
          setError(error.message);
          setLoading(false);
        }
      }
    };

    // Debounce
    const timeoutId = setTimeout(() => {
      fetchBooks();
    }, 500);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [activeCategory, searchQuery, startIndex]);

  // Handlers
  const handleCategorySelect = (cat) => {
    if (cat === activeCategory && !searchQuery) return;
    setSearchQuery('');
    setActiveCategory(cat);
    setStartIndex(0);
  };

  const handleSearch = (query) => {
    if (!query.trim()) return;
    setSearchQuery(query);
    setActiveCategory(null);
    setStartIndex(0);
  };

  const handleReset = () => {
    setSearchQuery('');
    setActiveCategory('Fiction');
    setStartIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    setStartIndex(prev => prev + ITEMS_PER_PAGE);
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (startIndex === 0) return;
    setStartIndex(prev => Math.max(0, prev - ITEMS_PER_PAGE));
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-indigo-50/30 font-sans text-gray-900 overflow-x-hidden relative">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-indigo-100/50 blur-[120px] rounded-full pointer-events-none"></div>

      <Header />

      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 relative z-10">

        <div className="space-y-4">
          <HeroSection />
          <SearchBar
            onSearch={handleSearch}
            currentQuery={searchQuery}
            onReset={handleReset}
          />
        </div>

        <div ref={scrollRef} className="space-y-6 pt-2">

          <CategorySection
            categories={CATEGORIES}
            activeCategory={!searchQuery ? activeCategory : null}
            onSelect={handleCategorySelect}
          />

          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              {searchQuery ? (
                <>
                  <span className="truncate max-w-[200px] sm:max-w-none">Results for "<span className="text-blue-600">{searchQuery}</span>"</span>
                  <button onClick={handleReset} className="text-[10px] text-red-500 hover:underline bg-red-50 px-2 py-1 rounded">Clear</button>
                </>
              ) : (
                <span>{activeCategory || 'Featured'}</span>
              )}
            </h2>

            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest shrink-0">
              Page {Math.floor(startIndex / ITEMS_PER_PAGE) + 1}
            </span>
          </div>

          {loading ? (
            <div className="py-24 flex flex-col items-center justify-center">
              <SearchAnimation />
            </div>
          ) : error ? (
            <div className="py-12 flex flex-col items-center justify-center bg-red-50 rounded-lg text-center p-4 border border-red-100">
              <p className="text-red-700 font-bold mb-1">Unable to load books.</p>
              <p className="text-red-600 text-sm mb-4">{error}</p>
              <button onClick={() => window.location.reload()} className="text-xs bg-red-600 text-white px-5 py-2 rounded-md shadow hover:bg-red-700 transition">
                Reload Page
              </button>
            </div>
          ) : books.length > 0 ? (
            <ProductGrid products={books} onViewDetails={setSelectedBook} />
          ) : (
            <div className="py-20 text-center bg-white rounded-lg border border-dashed border-gray-300">
              <p className="text-gray-400 mb-4">No books found matching criteria.</p>
              <button onClick={handleReset} className="text-blue-600 font-semibold hover:underline">
                Reset Filters
              </button>
            </div>
          )}

          {!loading && books.length > 0 && (
            <div className="flex justify-center gap-3 pt-6">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors border ${startIndex === 0
                  ? 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Detail Modal */}
      <BookDetailsModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </div>
  );
}

export default App;
