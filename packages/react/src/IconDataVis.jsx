import * as React from "react";

export const IconDataVis = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M20.5 2h-7a2 2 0 0 0-2 2v3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3h7.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 18c0 .275-.225.5-.5.5H4a.5.5 0 0 1-.5-.5v-2.5h8zm0-4h-8v-3h8zm0-4.5h-8V9c0-.275.225-.5.5-.5h7.5zM21 15c0 .275-.225.5-.5.5H13v-3h8zm0-4h-8V8h8zm0-4.5h-8V4c0-.275.225-.5.5-.5h7c.275 0 .5.225.5.5z"/>
  </svg>
));

IconDataVis.displayName = "IconDataVis";
