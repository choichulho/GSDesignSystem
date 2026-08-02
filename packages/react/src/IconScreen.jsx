import * as React from "react";

export const IconScreen = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21 14c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5V5.5C3 4.673 3.673 4 4.5 4h15c.827 0 1.5.673 1.5 1.5zM19.5 2.5h-15a3 3 0 0 0-3 3V14a3 3 0 0 0 3 3h6.75v3h-4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-4.5v-3h6.75a3 3 0 0 0 3-3V5.5a3 3 0 0 0-3-3" clipRule="evenodd"/>
  </svg>
));

IconScreen.displayName = "IconScreen";
