"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      aria-hidden
      className="mouse-glow"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  );
}
