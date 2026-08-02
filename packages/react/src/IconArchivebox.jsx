import * as React from "react";

export const IconArchivebox = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M18 20.5c.827 0 1.5-.673 1.5-1.5V8.5h-15V19c0 .827.673 1.5 1.5 1.5zM4 3.5a.5.5 0 0 0-.5.5v2.5A.5.5 0 0 0 4 7h16a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5zM4 2h16a2 2 0 0 1 2 2v2.5c0 .739-.405 1.376-1 1.723V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8.223c-.595-.347-1-.985-1-1.723V4a2 2 0 0 1 2-2m11.334 11H8.667C8.298 13 8 12.664 8 12.25s.299-.75.666-.75h6.668c.367 0 .666.336.666.75s-.299.75-.666.75" clipRule="evenodd"/>
  </svg>
));

IconArchivebox.displayName = "IconArchivebox";
