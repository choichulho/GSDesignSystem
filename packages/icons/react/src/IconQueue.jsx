import * as React from "react";

export const IconQueue = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8.25 6.5h12a.75.75 0 0 0 0-1.5h-12a.75.75 0 0 0 0 1.5m12 3h-12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5m-8.5 4.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5m8.5 4.5h-12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5M3.769 11.555l4.437 2.823a.5.5 0 0 1 .026.826l-4.438 3.227A.5.5 0 0 1 3 18.027v-6.05a.5.5 0 0 1 .769-.422" clipRule="evenodd"/>
  </svg>
));

IconQueue.displayName = "IconQueue";
