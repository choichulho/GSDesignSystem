import * as React from "react";

export const IconCommentLineFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17.25 8.5H6.75a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5m-4.5 4.5h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3v2.998c0 .89 1.077 1.337 1.707.707L13.412 18H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3" clipRule="evenodd"/>
  </svg>
));

IconCommentLineFill.displayName = "IconCommentLineFill";
