import * as React from "react";

export const IconInfoCircle = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 20.5c-4.687 0-8.5-3.813-8.5-8.5S7.313 3.5 12 3.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m1.965 14h-1v-4.946a.75.75 0 0 0-.75-.75h-1.75a.75.75 0 0 0 0 1.5h1V16h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5m-.715-8.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" clipRule="evenodd"/>
  </svg>
));

IconInfoCircle.displayName = "IconInfoCircle";
