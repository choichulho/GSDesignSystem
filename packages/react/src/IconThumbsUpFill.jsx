import * as React from "react";

export const IconThumbsUpFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14.5 7.5h5a3 3 0 0 1 3 3V15a6 6 0 0 1-6 6h-10V9.85l2.361-3.069a.5.5 0 0 0 .095-.212l.891-4.753A1 1 0 0 1 10.83 1h.67a3 3 0 0 1 3 3zm-13 12.75v-9a.75.75 0 0 1 .75-.75H5V21H2.25a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
  </svg>
));

IconThumbsUpFill.displayName = "IconThumbsUpFill";
