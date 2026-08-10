import * as React from "react";

export const IconCrop = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19 17.5h3.25a.75.75 0 0 1 0 1.5H19v3.25a.75.75 0 0 1-1.5 0V19H8a3 3 0 0 1-3-3V6.5H1.75a.75.75 0 0 1 0-1.5H5V1.75a.75.75 0 0 1 1.5 0V16c0 .827.673 1.5 1.5 1.5zM17.5 14V8c0-.827-.673-1.5-1.5-1.5H9.5V5H16a3 3 0 0 1 3 3v6z" clipRule="evenodd"/>
  </svg>
));

IconCrop.displayName = "IconCrop";
