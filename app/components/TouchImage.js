
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function TouchImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}) {
  const [touchPressed, setTouchPressed] = useState(false);
  const releaseTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (releaseTimer.current !== null) {
        window.clearTimeout(releaseTimer.current);
      }
    };
  }, []);

  function handlePointerDown(event) {
    if (event.pointerType !== "touch") return;

    if (releaseTimer.current !== null) {
      window.clearTimeout(releaseTimer.current);
      releaseTimer.current = null;
    }

    setTouchPressed(true);
  }

  function handlePointerUp(event) {
    if (event.pointerType !== "touch") return;

    if (releaseTimer.current !== null) {
      window.clearTimeout(releaseTimer.current);
    }

    // Keep the zoom visible briefly after the finger is lifted.
    releaseTimer.current = window.setTimeout(() => {
      setTouchPressed(false);
      releaseTimer.current = null;
    }, 700);
  }

  function handlePointerCancel() {
    if (releaseTimer.current !== null) {
      window.clearTimeout(releaseTimer.current);
      releaseTimer.current = null;
    }

    setTouchPressed(false);
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      draggable={false}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className={`${className}${touchPressed ? " touch-image-pressed" : ""}`}
    />
  );
}
