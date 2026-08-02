import * as React from "react";

export const IconMoreHorizontalAlt = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.5 12c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m13.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" clipRule="evenodd"/>
  </svg>
));

IconMoreHorizontalAlt.displayName = "IconMoreHorizontalAlt";
