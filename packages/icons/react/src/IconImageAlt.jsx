import * as React from "react";

export const IconImageAlt = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M14.336 10.586a2 2 0 0 1 2.828 0l2.336 2.336V6c0-.827-.673-1.5-1.5-1.5H6c-.827 0-1.5.673-1.5 1.5v10.05l2.69-2.69a1.5 1.5 0 0 1 2.12 0l.772.772a.5.5 0 0 0 .707 0zM6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m1 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0" clipRule="evenodd"/>
  </svg>
));

IconImageAlt.displayName = "IconImageAlt";
