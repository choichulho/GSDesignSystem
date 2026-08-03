import * as React from "react";

export const IconDepartmentFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M16 12c.275 0 .5.225.5.5V14h-9v-1.5c0-.275.225-.5.5-.5z"/><path fill="currentColor" fillRule="evenodd" d="M18 3c1.655 0 3 1.345 3 3v13.5h1.25a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5H3V6c0-1.655 1.345-3 3-3zM8 10.5a2 2 0 0 0-2 2v2.25c0 .415.335.75.75.75h.75v4H9v-4h2.25v4h1.5v-4H15v4h1.5v-4h.75c.415 0 .75-.335.75-.75V12.5a2 2 0 0 0-2-2zm.75-4a.749.749 0 1 0 0 1.5h6.5a.749.749 0 1 0 0-1.5z" clipRule="evenodd"/>
  </svg>
));

IconDepartmentFill.displayName = "IconDepartmentFill";
