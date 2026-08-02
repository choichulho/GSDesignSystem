import * as React from "react";

export const IconTextAlignLeft = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.75 6h14.5a.75.75 0 0 0 0-1.5H4.75a.75.75 0 0 0 0 1.5m0 4.5h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0 0 1.5m14.5 4.5H4.75a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 0 1.5m-14.5 4.5h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0 0 1.5" clipRule="evenodd"/>
  </svg>
));

IconTextAlignLeft.displayName = "IconTextAlignLeft";
