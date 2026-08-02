import * as React from "react";

export const IconTextItalic = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M18.25 5h-8.5a.75.75 0 0 0 0 1.5h3.01l-4.004 11H5.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.898l3.999-10.986.003-.014h3.896a.75.75 0 0 0 0-1.5" clipRule="evenodd"/>
  </svg>
));

IconTextItalic.displayName = "IconTextItalic";
