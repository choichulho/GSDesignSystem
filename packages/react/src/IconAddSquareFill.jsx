import * as React from "react";

export const IconAddSquareFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3 18c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3V6c0-1.65-1.35-3-3-3H6C4.35 3 3 4.35 3 6zm9.75-6.75h3.5c.413 0 .75.338.75.75s-.337.75-.75.75h-3.5v3.5c0 .413-.338.75-.75.75a.75.75 0 0 1-.75-.75v-3.5h-3.5A.75.75 0 0 1 7 12c0-.412.338-.75.75-.75h3.5v-3.5c0-.412.338-.75.75-.75s.75.338.75.75z" clipRule="evenodd"/>
  </svg>
));

IconAddSquareFill.displayName = "IconAddSquareFill";
