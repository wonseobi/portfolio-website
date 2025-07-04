import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setVisible(window.pageYOffset > 300);
    }
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
    onClick={scrollToTop}
    style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        backgroundColor: "#00c6ff",
        border: "none",
        borderRadius: "50%",
        width: "3.5rem",
        height: "3.5rem",
        fontSize: "1.8rem",
        color: "#0f0f1b",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,198,255,0.5)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
        zIndex: 1000,
    }}
    onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.15)";
        e.currentTarget.style.boxShadow = "0 0 8px 2px #00c6ff";  // softer, smaller glow
    }}
    onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,198,255,0.5)";
    }}
    aria-label="Scroll to top"
    title="Scroll to top"
    >
    ↑
    </button>
  );
}
