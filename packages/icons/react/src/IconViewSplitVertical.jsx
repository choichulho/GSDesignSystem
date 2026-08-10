import * as React from "react";

export const IconViewSplitVertical = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19.5 9a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5zM19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m1.25 11.5H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5m-16.5 5h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5" clipRule="evenodd"/>
  </svg>
));

IconViewSplitVertical.displayName = "IconViewSplitVertical";
