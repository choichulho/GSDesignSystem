import * as React from "react";

export const IconCheckmarkCircleFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m17.248 9.404-6.253 6.254a.74.74 0 0 1-.584.209.74.74 0 0 1-.583-.21l-3.076-3.076a.75.75 0 0 1 1.06-1.061l2.599 2.6 5.777-5.777a.75.75 0 0 1 1.06 1.061M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" clipRule="evenodd"/>
  </svg>
));

IconCheckmarkCircleFill.displayName = "IconCheckmarkCircleFill";
