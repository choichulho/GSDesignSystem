import * as React from "react";

export const IconBookmark = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m18 20.291-4.232-4.232A2.48 2.48 0 0 0 12 15.327c-.668 0-1.295.26-1.768.732L6 20.291V4.5C6 3.673 6.673 3 7.5 3h9c.827 0 1.5.673 1.5 1.5zM16.5 1.5h-9c-1.656 0-3 1.344-3 3v16.999a.999.999 0 0 0 1.707.707l5.086-5.086a1 1 0 0 1 .707-.293c.256 0 .512.097.707.293l5.086 5.086a.999.999 0 0 0 1.707-.707V4.5c0-1.656-1.344-3-3-3" clipRule="evenodd"/>
  </svg>
));

IconBookmark.displayName = "IconBookmark";
