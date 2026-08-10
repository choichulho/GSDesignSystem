import * as React from "react";

export const IconRow = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20.25 4H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5M19 8.993H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m0 1.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zM3.75 18.5h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5" clipRule="evenodd"/>
  </svg>
));

IconRow.displayName = "IconRow";
