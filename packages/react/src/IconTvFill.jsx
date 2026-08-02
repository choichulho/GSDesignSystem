import * as React from "react";

export const IconTvFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m10.576 14.084 4.758-2.747a.752.752 0 0 0 0-1.303l-4.758-2.747a.752.752 0 0 0-1.128.651v5.494c0 .58.627.94 1.127.652M4 3h16a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m2.75 16.5h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5" clipRule="evenodd"/>
  </svg>
));

IconTvFill.displayName = "IconTvFill";
