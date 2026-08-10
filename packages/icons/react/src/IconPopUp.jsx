import * as React from "react";

export const IconPopUp = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19.5 14.5c.827 0 1.5-.673 1.5-1.5V6c0-.827-.673-1.5-1.5-1.5h-10C8.673 4.5 8 5.173 8 6v7c0 .827.673 1.5 1.5 1.5zM9.5 3h10c1.65 0 3 1.35 3 3v7c0 1.65-1.35 3-3 3h-10c-1.65 0-3-1.35-3-3V6c0-1.65 1.35-3 3-3M13 18.25a.75.75 0 0 1 1.5 0V19a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h.75a.75.75 0 0 1 0 1.5H3.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5z" clipRule="evenodd"/>
  </svg>
));

IconPopUp.displayName = "IconPopUp";
