"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
};

type HomeTestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export function HomeTestimonialCarousel({ testimonials }: HomeTestimonialCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  if (!testimonials.length) {
    return null;
  }

  const active = testimonials[index];

  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">What teams say</p>
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={`${active.author}-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <p className="text-lg text-slate-700">&ldquo;{active.quote}&rdquo;</p>
          <footer className="mt-3 text-sm font-semibold text-slate-900">{active.author}</footer>
        </motion.blockquote>
      </AnimatePresence>

      <div className="flex gap-2">
        {testimonials.map((item, dotIndex) => (
          <button
            key={`${item.author}-${dotIndex}`}
            type="button"
            aria-label={`Show testimonial ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 rounded-full transition ${
              dotIndex === index ? "w-8 bg-cyan-700" : "w-2.5 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
