import * as React from "react";

export const IconTimeFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2m3.28 13.41a.753.753 0 0 1-1.055.09l-2.715-2.285a.75.75 0 0 1-.265-.575V7.495a.749.749 0 1 1 1.5 0v4.795l2.45 2.06c.315.265.355.74.09 1.055z"/>
  </svg>
));

IconTimeFill.displayName = "IconTimeFill";
