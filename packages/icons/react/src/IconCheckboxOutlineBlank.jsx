import * as React from "react";

export const IconCheckboxOutlineBlank = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m0 1.5c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5H5c-.827 0-1.5-.673-1.5-1.5V5c0-.827.673-1.5 1.5-1.5z" clipRule="evenodd"/>
  </svg>
));

IconCheckboxOutlineBlank.displayName = "IconCheckboxOutlineBlank";
