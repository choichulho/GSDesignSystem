import * as React from "react";

export const IconCheckmark = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M20.705 6.295a.98.98 0 0 0-.67-.295c-.27-.01-.54.09-.745.29l-9.775 9.79-4.805-4.805a1.002 1.002 0 0 0-1.71.71c0 .255.1.51.295.705l5.515 5.515a.995.995 0 0 0 1.41 0L20.705 7.71A1 1 0 0 0 21 7.005c0-.255-.1-.51-.295-.705z"/>
  </svg>
));

IconCheckmark.displayName = "IconCheckmark";
