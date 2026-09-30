"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function SwingingSpider() {
  const bounds = useRef<HTMLDivElement>(null);
  const [anchor, setAnchor] = useState(0);
  const [dragging, setDragging] = useState(false);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const endX = useTransform(x, (value) => anchor + value);
  const endY = useTransform(y, (value) => 40 + value);

  useEffect(() => {
    const resize = () => {
      const small = window.innerWidth <= 900;
      setAnchor(
        window.innerWidth - (small ? 8 : 16) - (small ? 65 : 100) * 0.38,
      );
      x.jump(0);
      y.jump(0);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      x.stop();
      y.stop();
    };
  }, [x, y]);

  const release = () => {
    setDragging(false);
    if (reducedMotion) {
      x.jump(0);
      y.jump(0);
    } else {
      animate(x, 0, { type: "spring", stiffness: 95, damping: 12 });
      animate(y, 0, { type: "spring", stiffness: 95, damping: 12 });
    }
  };

  return (
    <div ref={bounds} className="spider-playground">
      <svg className="spider-web" aria-hidden="true">
        <motion.line x1={anchor} y1={0} x2={endX} y2={endY} />
      </svg>
      <motion.button
        className="spider-drag-handle"
        aria-label="Drag Spider-Man; use arrow keys to move and Escape to reset"
        title="Drag Spider-Man"
        style={{ x, y }}
        drag
        dragConstraints={bounds}
        dragElastic={0}
        dragMomentum={false}
        onPointerDown={() => {
          x.stop();
          y.stop();
        }}
        onDragStart={() => setDragging(true)}
        onDragEnd={release}
        onPointerCancel={release}
        onLostPointerCapture={() => {
          if (dragging) release();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            release();
            return;
          }
          const moves: Record<string, [number, number]> = {
            ArrowLeft: [-24, 0],
            ArrowRight: [24, 0],
            ArrowUp: [0, -24],
            ArrowDown: [0, 24],
          };
          const delta = moves[event.key];
          if (!delta) return;
          event.preventDefault();
          const rect = event.currentTarget.getBoundingClientRect();
          x.stop();
          y.stop();
          x.set(
            x.get() +
              Math.max(
                -rect.left,
                Math.min(delta[0], window.innerWidth - rect.right),
              ),
          );
          y.set(
            y.get() +
              Math.max(
                -rect.top,
                Math.min(delta[1], window.innerHeight - rect.bottom),
              ),
          );
        }}
        onBlur={release}
      >
        <img
          className={
            dragging ? "spider-character dragging" : "spider-character"
          }
          src={`${base}/images/spider-swing.png`}
          width="900"
          height="1196"
          alt=""
          draggable={false}
        />
      </motion.button>
    </div>
  );
}
