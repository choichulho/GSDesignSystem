import * as React from "react";

export const IconList = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4.25-1.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1 0-1.5m12 7h-12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5M4 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m16.25 5.25h-12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5M4 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clipRule="evenodd"/>
  </svg>
));

IconList.displayName = "IconList";
