import * as React from "react";

export const IconSearchCircle = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.5 12c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m9.125-3.5A2.63 2.63 0 0 0 8.5 11.125a2.63 2.63 0 0 0 2.625 2.625 2.63 2.63 0 0 0 2.625-2.625A2.63 2.63 0 0 0 11.125 8.5m4.125 2.625c0 .868-.27 1.672-.727 2.337l2.33 2.331a.75.75 0 1 1-1.06 1.06l-2.331-2.33a4.125 4.125 0 1 1 1.788-3.398" clipRule="evenodd"/>
  </svg>
));

IconSearchCircle.displayName = "IconSearchCircle";
