import * as React from "react";

export const IconClipboardFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M17 3.5c1.655 0 3 1.345 3 3v13c0 1.655-1.345 3-3 3H7c-1.655 0-3-1.345-3-3v-13c0-1.655 1.345-3 3-3V5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5z"/><path fill="currentColor" d="M14.5 1.5a1 1 0 0 1 1 1V4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1z"/>
  </svg>
));

IconClipboardFill.displayName = "IconClipboardFill";
