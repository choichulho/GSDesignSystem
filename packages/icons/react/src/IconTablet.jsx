import * as React from "react";

export const IconTablet = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M7 1h11c1.65 0 3 1.35 3 3v16c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V4c0-1.65 1.35-3 3-3m12.5 3c0-.827-.673-1.5-1.5-1.5H7c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5zm-5.75 16c.412 0 .75-.337.75-.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75c0 .413.338.75.75.75z" clipRule="evenodd"/>
  </svg>
));

IconTablet.displayName = "IconTablet";
