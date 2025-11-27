'use client';

import { useEffect, useState, useRef } from 'react';
import { PawPrint, Heart, Star, MapPin } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

const stats = [
  { icon: PawPrint, value: 1200, label: 'Dogs Hosted', suffix: '+' },
  { icon: Heart, value: 5, label: 'Years of Experience' },
  { icon: Star, value: 4.9, label: 'Average Rating', decimals: 1 },
  { icon: MapPin, value: 4, label: 'Play Yards / Zones' },
];

function AnimatedCounter({ to, duration = 2, decimals = 0, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const currentCount = start + progress * (to - start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="flex flex-col items-center gap-2">
                <stat.icon className="h-10 w-10 text-primary" />
                <p className="text-3xl font-bold font-headline md:text-4xl text-foreground">
                  <AnimatedCounter to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
