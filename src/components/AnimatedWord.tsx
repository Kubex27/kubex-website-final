"use client";

import { useEffect, useState } from "react";

const words = ["Kubex", "360° Marketing", "Your Growth Partner" , "Full-Service Solutions"];

export default function AnimatedWord() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        reverse ? prev - 1 : prev + 1
      );
    }, reverse ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="text-black font-bold">
      {words[index].substring(0, subIndex)}
      <span className="inline-block w-[1ch]">
        {blink ? "|" : " "}
      </span>
    </span>
  );
}
