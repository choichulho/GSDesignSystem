import * as React from "react";

export const IconDepartment = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M15.25 6.5a.749.749 0 1 1 0 1.5h-6.5a.749.749 0 1 1 0-1.5z"/><path fill="currentColor" fillRule="evenodd" d="M18 3c1.655 0 3 1.345 3 3v13.5h1.25a.749.749 0 1 1 0 1.5H1.75a.749.749 0 1 1 0-1.5H3V6c0-1.655 1.345-3 3-3zM6 4.5c-.825 0-1.5.675-1.5 1.5v13.5h3v-4h-.75a.75.75 0 0 1-.75-.75V12.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.25c0 .415-.335.75-.75.75h-.75v4h3V6c0-.825-.675-1.5-1.5-1.5zm3 11v4h2.25v-4zm3.75 0v4H15v-4zM8 12c-.275 0-.5.225-.5.5V14h9v-1.5c0-.275-.225-.5-.5-.5z" clipRule="evenodd"/>
  </svg>
));

IconDepartment.displayName = "IconDepartment";
