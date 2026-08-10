import * as React from "react";

export const IconVideoFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20.536 6.248 17 9.215V7.5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.803l3.536 2.967c.976.819 2.464.125 2.464-1.15V7.398c0-1.274-1.488-1.969-2.464-1.149" clipRule="evenodd"/>
  </svg>
));

IconVideoFill.displayName = "IconVideoFill";
