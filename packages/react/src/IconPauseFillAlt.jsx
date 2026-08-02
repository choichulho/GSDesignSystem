import * as React from "react";

export const IconPauseFillAlt = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8 4a2 2 0 0 1 2 2v12a2 2 0 1 1-4 0V6a2 2 0 0 1 2-2m8 0a2 2 0 0 1 2 2v12a2 2 0 1 1-4 0V6a2 2 0 0 1 2-2" clipRule="evenodd"/>
  </svg>
));

IconPauseFillAlt.displayName = "IconPauseFillAlt";
