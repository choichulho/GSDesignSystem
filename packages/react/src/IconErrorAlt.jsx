import * as React from "react";

export const IconErrorAlt = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.5 12c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m5.22-4.78a.75.75 0 0 1 1.06 0l8.5 8.5a.75.75 0 1 1-1.06 1.06l-8.5-8.5a.75.75 0 0 1 0-1.06" clipRule="evenodd"/>
  </svg>
));

IconErrorAlt.displayName = "IconErrorAlt";
