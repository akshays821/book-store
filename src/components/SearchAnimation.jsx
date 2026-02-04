import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const SearchAnimation = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        // We are fetching a robust, free search animation JSON from a CDN 
        // to avoid needing to download and store local assets for this demo.
        // This is a common pattern for lightweight simple animations.
        fetch('https://lottie.host/9e001844-c6bd-4228-b219-480929255869/g9L3wN7L2k.json')
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error("Animation load failed", err));
    }, []);

    if (!animationData) {
        // Fallback while animation loads
        return <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>;
    }

    return (
        <div className="w-48 h-48">
            <Lottie animationData={animationData} loop={true} />
            <p className="text-center text-slate-500 font-medium mt-2">Exploring Library...</p>
        </div>
    );
};

export default SearchAnimation;
