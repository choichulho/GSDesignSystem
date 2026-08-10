import * as React from "react";

export const IconCommit = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17 12a5 5 0 0 0-4-4.9V4a1 1 0 0 0-2 0v3.1a5.002 5.002 0 0 0 0 9.8V20a1 1 0 0 0 2 0v-3.1a5 5 0 0 0 4-4.9m-5-3.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5" clipRule="evenodd"/>
  </svg>
));

IconCommit.displayName = "IconCommit";
