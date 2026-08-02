import * as React from "react";

export const IconMobile = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16 21.5c.827 0 1.5-.673 1.5-1.5V4c0-.827-.673-1.5-1.5-1.5H9c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5zM9 1h7c1.65 0 3 1.35 3 3v16c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3V4c0-1.65 1.35-3 3-3m2.25 18h2.5c.412 0 .75.337.75.75s-.338.75-.75.75h-2.5a.75.75 0 0 1-.75-.75c0-.413.338-.75.75-.75" clipRule="evenodd"/>
  </svg>
));

IconMobile.displayName = "IconMobile";
