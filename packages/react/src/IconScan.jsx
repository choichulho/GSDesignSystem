import * as React from "react";

export const IconScan = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5 20h10.25a.75.75 0 0 1 0 1.5H5a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3h10.25a.75.75 0 0 1 0 1.5H5a1.5 1.5 0 0 0-1.5 1.5v13A1.5 1.5 0 0 0 5 20m6.5-3.75v-8.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0M16.75 7a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-.75-.75m3.75.75a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0z" clipRule="evenodd"/>
  </svg>
));

IconScan.displayName = "IconScan";
