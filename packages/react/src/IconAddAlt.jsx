import * as React from "react";

export const IconAddAlt = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.5 12c0 4.687 3.814 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5S16.687 3.5 12 3.5 3.5 7.313 3.5 12M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10.75-.75h3.5c.413 0 .75.338.75.75s-.337.75-.75.75h-3.5v3.5c0 .413-.338.75-.75.75a.75.75 0 0 1-.75-.75v-3.5h-3.5A.75.75 0 0 1 7 12c0-.412.338-.75.75-.75h3.5v-3.5c0-.412.338-.75.75-.75s.75.338.75.75z" clipRule="evenodd"/>
  </svg>
));

IconAddAlt.displayName = "IconAddAlt";
