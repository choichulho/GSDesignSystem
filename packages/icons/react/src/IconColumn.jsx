import * as React from "react";

export const IconColumn = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4.75 3a.75.75 0 0 0-.75.75v16.5a.75.75 0 0 0 1.5 0V3.75A.75.75 0 0 0 4.75 3m8.743 16a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5zm-.5-16h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m5.507.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0z" clipRule="evenodd"/>
  </svg>
));

IconColumn.displayName = "IconColumn";
