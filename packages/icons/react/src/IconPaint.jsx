import * as React from "react";

export const IconPaint = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M13 16.5V20a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3.5zM17.5 8c0 .827-.673 1.5-1.5 1.5H5c-.827 0-1.5-.673-1.5-1.5V5c0-.827.673-1.5 1.5-1.5h11c.827 0 1.5.673 1.5 1.5zm3-2.5H19V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V7h1.5v2.5c0 1.379-1.122 2.5-2.5 2.5h-3.75a3 3 0 0 0-3 3h-.75a1 1 0 0 0-1 1v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-4a1 1 0 0 0-1-1h-.75c0-.827.673-1.5 1.5-1.5H18a4 4 0 0 0 4-4V7a1.5 1.5 0 0 0-1.5-1.5" clipRule="evenodd"/>
  </svg>
));

IconPaint.displayName = "IconPaint";
