import * as React from "react";

export const IconCheckboxIndeterminate = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M18 12.25a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75zM19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3" clipRule="evenodd"/>
  </svg>
));

IconCheckboxIndeterminate.displayName = "IconCheckboxIndeterminate";
