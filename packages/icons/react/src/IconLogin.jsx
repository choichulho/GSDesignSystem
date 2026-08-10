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
    <path fill="currentColor" fillRule="evenodd" d="M11 2h8c1.65 0 3 1.35 3 3v14c0 1.65-1.35 3-3 3h-8c-1.65 0-3-1.35-3-3v-.75a.75.75 0 0 1 1.5 0V19a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 19 3.5h-8A1.5 1.5 0 0 0 9.5 5v.75a.75.75 0 1 1-1.5 0V5c0-1.65 1.35-3 3-3M9.97 16.28a.75.75 0 0 1 0-1.06l2.47-2.47H2.75a.75.75 0 1 1 0-1.5h9.69L9.97 8.78a.75.75 0 1 1 1.06-1.06l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0" clipRule="evenodd"/>
  </svg>
));

IconLogin.displayName = "IconLogin";
