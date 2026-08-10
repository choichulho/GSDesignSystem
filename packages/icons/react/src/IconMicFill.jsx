import * as React from "react";

export const IconMicFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M8.5 12a3.51 3.51 0 0 0 3.5 3.5 3.51 3.51 0 0 0 3.5-3.5V4.5A3.51 3.51 0 0 0 12 1a3.51 3.51 0 0 0-3.5 3.5zM19 10.25V12c0 3.612-2.738 6.575-6.25 6.95v2.55h3.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.5v-2.549C7.689 18.565 5 15.432 5 11.802V10.25a.75.75 0 0 1 1.5 0v1.589c0 2.862 2.12 5.367 4.97 5.636A5.507 5.507 0 0 0 17.5 12v-1.75a.75.75 0 0 1 1.5 0" clipRule="evenodd"/>
  </svg>
));

IconMicFill.displayName = "IconMicFill";
