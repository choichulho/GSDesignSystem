import * as React from "react";

export const IconInfoCircleFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M13.965 17.5h-3.5a.75.75 0 0 1 0-1.5h1v-4.196h-1a.75.75 0 1 1 0-1.5h1.75a.75.75 0 0 1 .75.75V16h1a.75.75 0 1 1 0 1.5M12 6.5A1.25 1.25 0 1 1 12 9a1.25 1.25 0 0 1 0-2.5M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" clipRule="evenodd"/>
  </svg>
));

IconInfoCircleFill.displayName = "IconInfoCircleFill";
