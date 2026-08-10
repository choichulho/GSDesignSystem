import * as React from "react";

export const IconHomeFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M21.33 8.575 13.42 1.51a1.99 1.99 0 0 0-2.66 0L2.67 8.725c-.425.38-.67.92-.67 1.495v8.785c0 1.655 1.345 3 3 3h14c1.655 0 3-1.345 3-3v-8.94c0-.57-.245-1.11-.67-1.49M13 17.5c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1z"/>
  </svg>
));

IconHomeFill.displayName = "IconHomeFill";
