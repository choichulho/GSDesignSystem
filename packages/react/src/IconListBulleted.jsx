import * as React from "react";

export const IconListBulleted = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2 5.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M2 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4M21.25 6.25h-10.5a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5m0 5h-10.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5m-10.5 6.5h10.5a.75.75 0 0 1 0 1.5h-10.5a.75.75 0 0 1 0-1.5" clipRule="evenodd"/>
  </svg>
));

IconListBulleted.displayName = "IconListBulleted";
