"use client";

import { useEffect, useState } from "react";

export default function GlowingCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);

    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div
        className="h-86 w-86 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-500  opacity-15 blur-3xl"
      />
    </div>
  );
}
