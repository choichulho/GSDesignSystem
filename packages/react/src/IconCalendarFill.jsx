import * as React from "react";

export const IconCalendarFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M15.5 6.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m-8.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M17 4h1c1.65 0 3 1.35 3 3v1.518H3V7c0-1.65 1.35-3 3-3h1V2.75a.75.75 0 0 1 1.5 0V4h7V2.75a.75.75 0 0 1 1.5 0zM6 22c-1.65 0-3-1.35-3-3v-8.982h18V19c0 1.65-1.35 3-3 3z" clipRule="evenodd"/>
  </svg>
));

IconCalendarFill.displayName = "IconCalendarFill";
