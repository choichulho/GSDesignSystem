import * as React from "react";

export const IconChartFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17 16a1 1 0 0 1-2 0v-2.5a1 1 0 0 1 2 0zm-4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0zm-4 0a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm9-13H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3" clipRule="evenodd"/>
  </svg>
));

IconChartFill.displayName = "IconChartFill";
