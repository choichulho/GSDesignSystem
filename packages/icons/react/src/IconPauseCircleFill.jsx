import * as React from "react";

export const IconPauseCircleFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M15.5 15.25a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75zm-4.5 0a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1-.75-.75v-6.5A.75.75 0 0 1 9.25 8h1a.75.75 0 0 1 .75.75zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" clipRule="evenodd"/>
  </svg>
));

IconPauseCircleFill.displayName = "IconPauseCircleFill";
