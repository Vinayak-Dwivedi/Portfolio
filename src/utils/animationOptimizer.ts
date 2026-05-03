// Performance optimization utilities for animations

export const reduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const isMobile = () => {
  return window.innerWidth < 768;
};

export const shouldOptimize = () => {
  return reduceMotion() || isMobile();
};

export const getOptimizedDuration = (defaultDuration: number) => {
  if (shouldOptimize()) {
    return defaultDuration * 0.5; // Faster animations on mobile/reduced motion
  }
  return defaultDuration;
};

export const getOptimizedStagger = (defaultStagger: number) => {
  if (shouldOptimize()) {
    return defaultStagger * 0.5; // Reduce stagger for better performance
  }
  return defaultStagger;
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Lazy load animations
export const lazyAnimate = (element: HTMLElement, animation: Animation) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animation.play();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
  } else {
    animation.play();
  }
};
