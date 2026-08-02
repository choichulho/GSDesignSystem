import * as React from "react";

export const IconMobileFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17.5 17.5c0 .827-.673 1.5-1.5 1.5H9c-.827 0-1.5-.673-1.5-1.5V4c0-.827.673-1.5 1.5-1.5h7c.827 0 1.5.673 1.5 1.5zm-3.5 4h-3a.5.5 0 0 1-.5-.5c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5s-.225.5-.5.5M16 1H9C7.35 1 6 2.35 6 4v16c0 1.65 1.35 3 3 3h7c1.65 0 3-1.35 3-3V4c0-1.65-1.35-3-3-3" clipRule="evenodd"/>
  </svg>
));

IconMobileFill.displayName = "IconMobileFill";
