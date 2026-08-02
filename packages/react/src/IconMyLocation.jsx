import * as React from "react";

export const IconMyLocation = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10S2 17.5 2 12m10.75 6.25v2.2c4.1-.35 7.35-3.6 7.7-7.7h-2.2c-.4 0-.75-.35-.75-.75s.35-.75.75-.75h2.2c-.35-4.1-3.6-7.35-7.7-7.7v2.2c0 .4-.35.75-.75.75s-.75-.35-.75-.75v-2.2c-4.1.35-7.35 3.6-7.7 7.7h2.2c.4 0 .75.35.75.75s-.35.75-.75.75h-2.2c.35 4.1 3.6 7.35 7.7 7.7v-2.2c0-.4.35-.75.75-.75s.75.35.75.75M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clipRule="evenodd"/>
  </svg>
));

IconMyLocation.displayName = "IconMyLocation";
