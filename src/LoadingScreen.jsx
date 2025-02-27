/* eslint-disable react/prop-types */
import { useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 2000); // Simpan loading minimal 2 detik

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-xl font-light">Loading...</div>
      <div className="w-[200px] h-[2px] bg-gray-900 relative overflow-hidden">
        <div className="w-[40%] h-full bg-white shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
