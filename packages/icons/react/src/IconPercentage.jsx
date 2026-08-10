import * as React from "react";

export const IconPercentage = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.22 19.72a.75.75 0 1 0 1.06 1.06l16.5-16.5a.75.75 0 1 0-1.06-1.06zM6.75 3a3.75 3.75 0 1 0-.001 7.499A3.75 3.75 0 0 0 6.75 3m0 1.5C7.99 4.5 9 5.51 9 6.75S7.99 9 6.75 9 4.5 7.99 4.5 6.75 5.51 4.5 6.75 4.5m10.5 9a3.75 3.75 0 1 0-.001 7.499 3.75 3.75 0 0 0 .001-7.499m0 1.5c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S15 18.49 15 17.25 16.01 15 17.25 15" clipRule="evenodd"/>
  </svg>
));

IconPercentage.displayName = "IconPercentage";
