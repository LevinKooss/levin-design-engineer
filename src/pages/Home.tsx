import React, { useState, useEffect, useRef } from 'react';
import { Hero } from '../components/Hero';
import { TechStack } from '../components/TechStack';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';

const RevealOnScroll = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Home = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <RevealOnScroll>
        <Hero />
      </RevealOnScroll>
      
      <RevealOnScroll delay={100}>
        <TechStack />
      </RevealOnScroll>
      
      <RevealOnScroll delay={100}>
        <Projects />
      </RevealOnScroll>
      
      <RevealOnScroll delay={100}>
        <Services />
      </RevealOnScroll>
    </main>
  );
};