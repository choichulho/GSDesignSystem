import * as React from "react";

export const IconArrowUp = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M19.78 11.53a.75.75 0 0 1-.49.22.74.74 0 0 1-.57-.22l-5.97-5.97v14.695c0 .41-.335.745-.745.745h-.01a.747.747 0 0 1-.745-.745v-14.7l-5.97 5.97a.749.749 0 1 1-1.06-1.06l7.245-7.245c.15-.15.34-.22.535-.22s.385.07.535.22l7.25 7.25c.195.195.26.47.195.715a.8.8 0 0 1-.195.345z"/>
  </svg>
));

IconArrowUp.displayName = "IconArrowUp";
