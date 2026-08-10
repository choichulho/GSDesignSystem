import * as React from "react";

export const IconChart = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M18 19.5c.827 0 1.5-.673 1.5-1.5V6c0-.827-.673-1.5-1.5-1.5H6c-.827 0-1.5.673-1.5 1.5v12c0 .827.673 1.5 1.5 1.5zM6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m1 8a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0zm9 1.5a1 1 0 0 0-1 1V16a1 1 0 0 0 2 0v-2.5a1 1 0 0 0-1-1M11 8a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0z" clipRule="evenodd"/>
  </svg>
));

IconChart.displayName = "IconChart";
