import { useEffect, useState } from "react";

const RotatingBox = () => {
  const [borderAngle, setBorderAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderAngle((prevAngle) => (prevAngle + 1) % 360); // Animasi rotasi border
    }, 8); // Rotasi sekitar 60fps
    return () => clearInterval(interval);
  }, []);

  const boxStyle = {
    width: "100%",
    maxWidth: "20rem",
    cursor: "pointer",
    padding: "1px",
    animation: "rotate-border 3s linear infinite",
    borderRadius: "0.5rem",
    background: `conic-gradient(from ${borderAngle}deg, black 80%, white 90%, black 100%)`,
    transition: "background 1s ease-out",
  };

  const contentStyle = {
    borderRadius: "0.5rem",
    border: "1px solid #2d2d2d", // Warna border netral gelap
    backgroundColor: "#1e1e1e", // Warna latar belakang gelap
    padding: "2.5rem",
    textAlign: "center",
    fontSize: "0.75rem",
    color: "rgba(255, 255, 255, 0.5)", // Teks transparan
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div style={boxStyle}>
        <div style={contentStyle}>Hello World</div>
      </div>
    </div>
  );
};

export default RotatingBox;
