// components/RoughNotationComponent.js

import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

const RoughNotationComponent = ({
  children,
  type = "highlight",
  color = "yellow",
  animationDuration = 1000,
  padding = 1,
}) => {
  const annotationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const annotation = annotate(annotationRef.current, {
              type,
              color,
              animationDuration,
              padding,
            });
            annotation.show();
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (annotationRef.current) {
      observer.observe(annotationRef.current);
    }

    return () => {
      if (annotationRef.current) {
        observer.unobserve(annotationRef.current);
      }
    };
  }, [type, color, animationDuration]);

  return <span ref={annotationRef}>{children}</span>;
};

export default RoughNotationComponent;
