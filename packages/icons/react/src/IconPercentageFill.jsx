import * as React from "react";

export const IconPercentageFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.22 19.72a.75.75 0 1 0 1.06 1.06l16.5-16.5a.75.75 0 1 0-1.06-1.06zM10.5 6.75a3.75 3.75 0 1 1-7.499.001A3.75 3.75 0 0 1 10.5 6.75M21 17.25a3.75 3.75 0 1 1-7.499.001A3.75 3.75 0 0 1 21 17.25" clipRule="evenodd"/>
  </svg>
));

IconPercentageFill.displayName = "IconPercentageFill";
