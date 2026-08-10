import * as React from "react";

export const IconMoreHorizontalAltFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17 13.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 17 13.5m-5 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 13.5m-5 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 7 13.5M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" clipRule="evenodd"/>
  </svg>
));

IconMoreHorizontalAltFill.displayName = "IconMoreHorizontalAltFill";
