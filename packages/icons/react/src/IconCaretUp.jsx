import * as React from "react";

export const IconCaretUp = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m16.854 14.146-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .354.854H16.5a.5.5 0 0 0 .354-.854" clipRule="evenodd"/>
  </svg>
));

IconCaretUp.displayName = "IconCaretUp";
