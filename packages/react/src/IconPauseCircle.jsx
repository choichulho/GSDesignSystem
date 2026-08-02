import * as React from "react";

export const IconPauseCircle = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m0 1.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5-8.5-3.813-8.5-8.5S7.313 3.5 12 3.5M10.25 8h-1a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75m3.5 0h1a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
  </svg>
));

IconPauseCircle.displayName = "IconPauseCircle";
