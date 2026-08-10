import * as React from "react";

export const IconFullscreenExit = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 6.5V3.75a.75.75 0 0 1 1.5 0V6.5a3 3 0 0 1-3 3H3.75a.75.75 0 0 1 0-1.5H6.5A1.5 1.5 0 0 0 8 6.5M17.5 8h2.75a.75.75 0 0 1 0 1.5H17.5a3 3 0 0 1-3-3V3.75a.75.75 0 0 1 1.5 0V6.5A1.5 1.5 0 0 0 17.5 8M3.75 16H6.5A1.5 1.5 0 0 1 8 17.5v2.75a.75.75 0 0 0 1.5 0V17.5a3 3 0 0 0-3-3H3.75a.75.75 0 0 0 0 1.5M16 17.5v2.75a.75.75 0 0 1-1.5 0V17.5a3 3 0 0 1 3-3h2.75a.75.75 0 0 1 0 1.5H17.5a1.5 1.5 0 0 0-1.5 1.5" clipRule="evenodd"/>
  </svg>
));

IconFullscreenExit.displayName = "IconFullscreenExit";
