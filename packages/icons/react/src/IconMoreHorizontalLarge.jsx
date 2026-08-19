import * as React from "react";

export const IconMoreHorizontalLarge = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.75 9a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m0 4a1.251 1.251 0 0 1 0-2.5 1.251 1.251 0 0 1 0 2.5M12 9a2.75 2.75 0 1 0 0 5.5A2.75 2.75 0 0 0 12 9m0 4a1.251 1.251 0 0 1 0-2.5 1.251 1.251 0 0 1 0 2.5m5.5-1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m1.5 0a1.25 1.25 0 0 0 2.5 0 1.251 1.251 0 0 0-2.5 0" clipRule="evenodd"/>
  </svg>
));

IconMoreHorizontalLarge.displayName = "IconMoreHorizontalLarge";
