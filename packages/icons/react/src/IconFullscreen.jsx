import * as React from "react";

export const IconFullscreen = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.5 6v2.75a.75.75 0 0 1-1.5 0V6a3 3 0 0 1 3-3h2.75a.75.75 0 0 1 0 1.5H6A1.5 1.5 0 0 0 4.5 6M18 4.5h-2.75a.75.75 0 0 1 0-1.5H18a3 3 0 0 1 3 3v2.75a.75.75 0 0 1-1.5 0V6A1.5 1.5 0 0 0 18 4.5m-9.25 15H6A1.5 1.5 0 0 1 4.5 18v-2.75a.75.75 0 0 0-1.5 0V18a3 3 0 0 0 3 3h2.75a.75.75 0 0 0 0-1.5M19.5 18v-2.75a.75.75 0 0 1 1.5 0V18a3 3 0 0 1-3 3h-2.75a.75.75 0 0 1 0-1.5H18a1.5 1.5 0 0 0 1.5-1.5" clipRule="evenodd"/>
  </svg>
));

IconFullscreen.displayName = "IconFullscreen";
