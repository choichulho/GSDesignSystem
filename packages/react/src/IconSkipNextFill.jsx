import * as React from "react";

export const IconSkipNextFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19 4h1a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 20 20h-1a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 19 4m-13.75.26 11.156 6.441c1 .577 1 2.02 0 2.598L5.25 19.739A1.5 1.5 0 0 1 3 18.442V5.56a1.5 1.5 0 0 1 2.25-1.3" clipRule="evenodd"/>
  </svg>
));

IconSkipNextFill.displayName = "IconSkipNextFill";
