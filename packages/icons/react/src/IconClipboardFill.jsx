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
    <path fill="currentColor" d="M17 3.5a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3V5a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 17 5zm-.72 8.543a.75.75 0 0 0-1.06 0l-4.647 4.647-1.793-1.794a.75.75 0 0 0-1.06 1.061l2.323 2.323a.75.75 0 0 0 1.06 0l5.177-5.177a.75.75 0 0 0 0-1.06M14.5 1.5a1 1 0 0 1 1 1V4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1z"/><g clipPath="url(#a)"><path fill="currentColor" d="M17 3.5c1.655 0 3 1.345 3 3v13c0 1.655-1.345 3-3 3H7c-1.655 0-3-1.345-3-3v-13c0-1.655 1.345-3 3-3V5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5zm-2.5-2a1 1 0 0 1 1 1V4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M4 1.5h16v21H4z"/></clipPath></defs>
  </svg>
));

IconClipboardFill.displayName = "IconClipboardFill";
