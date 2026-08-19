import * as React from "react";

export const IconChartScatter = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M2.75 3a.75.75 0 0 1 .75.75V19a.5.5 0 0 0 .5.5h17.25a.75.75 0 0 1 0 1.5H4a2 2 0 0 1-2-2V3.75A.75.75 0 0 1 2.75 3"/><path fill="currentColor" d="M8 13a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 13m8-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-5.75-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 18.5 5"/>
  </svg>
));

IconChartScatter.displayName = "IconChartScatter";
