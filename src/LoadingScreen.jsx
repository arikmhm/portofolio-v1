/* eslint-disable react/prop-types */
import { useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete(); // Panggil onComplete setelah 2 detik
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-xl font-light">Loading...</div>
      <div className="w-[200px] h-[2px] bg-gray-900 relative overflow-hidden">
        <div className="w-[40%] h-full bg-white animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
