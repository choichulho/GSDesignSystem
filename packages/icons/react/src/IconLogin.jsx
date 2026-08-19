import * as React from "react";

export const IconLogin = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M18 2c1.65 0 3 1.35 3 3v14c0 1.65-1.35 3-3 3h-8c-1.65 0-3-1.35-3-3v-.75a.75.75 0 0 1 1.5 0V19a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 18 3.5h-8A1.5 1.5 0 0 0 8.5 5v.75a.75.75 0 0 1-1.5 0V5c0-1.65 1.35-3 3-3zM9.5 7.5c.192 0 .384.073.53.22l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06-1.06l2.47-2.47H1.75a.75.75 0 1 1 0-1.5h9.69L8.97 8.78A.75.75 0 0 1 9.5 7.5"/>
  </svg>
));

IconLogin.displayName = "IconLogin";
