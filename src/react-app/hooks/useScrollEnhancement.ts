import { useEffect } from 'react';

export const useScrollEnhancement = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all section elements for fade-in animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('animate-ready');
      observer.observe(section);
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Find organic background elements
      const organicElements = document.querySelectorAll('.organic-background');

      organicElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Check if element is in viewport
        const isInViewport = elementTop < windowHeight && elementTop + elementHeight > 0;

        if (isInViewport) {
          // Calculate visibility percentage
          const visibilityPercent = Math.max(0, Math.min(1,
            (windowHeight - elementTop) / (windowHeight + elementHeight)
          ));

          // Enhance breathing animation based on scroll position
          if (visibilityPercent > 0.3) {
            element.classList.add('scroll-enhanced');

            // Adjust CSS custom properties for dynamic breathing
            const htmlElement = element as HTMLElement;
            htmlElement.style.setProperty('--breath-opacity-max',
              String(0.4 + (visibilityPercent * 0.4))
            );
            htmlElement.style.setProperty('--breath-duration',
              String(Math.max(4, 8 - (visibilityPercent * 3))) + 's'
            );
          } else {
            element.classList.remove('scroll-enhanced');
          }
        } else {
          element.classList.remove('scroll-enhanced');
        }
      });

      // Enhance hero section specifically
      const heroSection = document.querySelector('.hero-organic');
      if (heroSection && scrollY < windowHeight) {
        const heroElement = heroSection as HTMLElement;
        const intensity = Math.max(0.3, 1 - (scrollY / windowHeight));

        heroElement.style.setProperty('--breath-opacity-max', String(intensity * 0.7));
        heroElement.style.setProperty('--breath-scale-max', String(1 + (intensity * 0.03)));
      }
    };

    // Throttled scroll handler for performance
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });

    // Initial call
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      observer.disconnect();
    };
  }, []);
}; 
