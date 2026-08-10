import * as React from "react";

export const IconCalculator = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17.5 21.5c.827 0 1.5-.673 1.5-1.5V4c0-.827-.673-1.5-1.5-1.5h-11C5.673 2.5 5 3.173 5 4v16c0 .827.673 1.5 1.5 1.5zM6.5 1h11a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3m10 3.5h-9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-9 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-8 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-10 4.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m5.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clipRule="evenodd"/>
  </svg>
));

IconCalculator.displayName = "IconCalculator";
