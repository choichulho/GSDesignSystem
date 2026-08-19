import * as React from "react";

export const IconArchive = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M13.75 14.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5z"/><path fill="currentColor" fillRule="evenodd" d="M19 1.5a1 1 0 0 1 1 1v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-18a1 1 0 0 1 1-1zM5.5 12v8.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V12zm0-1.5h13v-3h-13zm0-4.5h13V3h-13z" clipRule="evenodd"/>
  </svg>
));

IconArchive.displayName = "IconArchive";
