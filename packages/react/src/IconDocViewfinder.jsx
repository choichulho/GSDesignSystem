import * as React from "react";

export const IconDocViewfinder = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.75 9a.75.75 0 0 0 .75-.75V6A1.5 1.5 0 0 1 6 4.5h2.25a.75.75 0 0 0 0-1.5H6a3 3 0 0 0-3 3v2.25c0 .414.336.75.75.75M18 3h-2.25a.75.75 0 0 0 0 1.5H18A1.5 1.5 0 0 1 19.5 6v2.25a.75.75 0 0 0 1.5 0V6a3 3 0 0 0-3-3m1.5 12.75a.75.75 0 0 1 1.5 0V18a3 3 0 0 1-3 3h-2.25a.75.75 0 0 1 0-1.5H18a1.5 1.5 0 0 0 1.5-1.5zM8.25 19.5H6A1.5 1.5 0 0 1 4.5 18v-2.25a.75.75 0 0 0-1.5 0V18a3 3 0 0 0 3 3h2.25a.75.75 0 0 0 0-1.5m.25-11v7a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 15 8H9a.5.5 0 0 0-.5.5m8.5 0v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2m-3 1h-4c-.275 0-.5.225-.5.5s.225.5.5.5h4c.275 0 .5-.225.5-.5s-.225-.5-.5-.5m-4 2h2c.275 0 .5.225.5.5s-.225.5-.5.5h-2a.5.5 0 0 1-.5-.5c0-.275.225-.5.5-.5" clipRule="evenodd"/>
  </svg>
));

IconDocViewfinder.displayName = "IconDocViewfinder";
