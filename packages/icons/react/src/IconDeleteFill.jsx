import * as React from "react";

export const IconDeleteFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M20.25 5a.749.749 0 1 1 0 1.5h-.745V20c0 1.655-1.345 3-3 3h-9c-1.655 0-3-1.345-3-3V6.5h-.76a.749.749 0 1 1 0-1.5zM9.75 9.5a.75.75 0 0 0-.75.75v7.5a.75.75 0 1 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75m4.5 0a.75.75 0 0 0-.75.75v7.5a.75.75 0 1 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75m0-7.5a.749.749 0 1 1 0 1.5h-4.5a.749.749 0 1 1 0-1.5z"/>
  </svg>
));

IconDeleteFill.displayName = "IconDeleteFill";
