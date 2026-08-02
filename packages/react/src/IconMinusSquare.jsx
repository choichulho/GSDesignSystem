import * as React from "react";

export const IconMinusSquare = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M18 3c1.65 0 3 1.35 3 3v12c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3V6c0-1.65 1.35-3 3-3zM6 4.5c-.825 0-1.5.675-1.5 1.5v12c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5V6c0-.825-.675-1.5-1.5-1.5zm10.25 6.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5z"/>
  </svg>
));

IconMinusSquare.displayName = "IconMinusSquare";
