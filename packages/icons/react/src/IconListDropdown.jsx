import * as React from "react";

export const IconListDropdown = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21 20.5a.5.5 0 0 1-.5.5H10a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 .5.5zM8 8H3.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5V5h-8a2 2 0 0 0-2 2zm12.5-3h-1V3.5a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2H8v11a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-1.75 4h-4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5M11 9.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M18.75 13h-4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5m-7.75.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M18.75 17h-4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5m-7.75.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0" clipRule="evenodd"/>
  </svg>
));

IconListDropdown.displayName = "IconListDropdown";
