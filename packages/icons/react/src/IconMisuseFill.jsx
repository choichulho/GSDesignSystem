import * as React from "react";

export const IconMisuseFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16.78 15.72a.75.75 0 1 1-1.06 1.06L12 13.06l-3.72 3.72a.75.75 0 1 1-1.06-1.06L10.94 12 7.22 8.28a.75.75 0 1 1 1.06-1.06L12 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06L13.06 12zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" clipRule="evenodd"/>
  </svg>
));

IconMisuseFill.displayName = "IconMisuseFill";
