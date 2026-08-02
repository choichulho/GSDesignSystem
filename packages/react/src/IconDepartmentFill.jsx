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
    <g fill="currentColor" clipPath="url(#a)"><path d="M16 12H8c-.275 0-.5.225-.5.5V14h9v-1.5c0-.275-.225-.5-.5-.5"/><path d="M18 3H6C4.345 3 3 4.345 3 6v15h18V6c0-1.655-1.345-3-3-3M8.75 6.5h6.5a.749.749 0 1 1 0 1.5h-6.5a.749.749 0 1 1 0-1.5M18 14.75c0 .415-.335.75-.75.75h-.75v4.25a.749.749 0 1 1-1.5 0V15.5h-2.25v4.25a.749.749 0 1 1-1.5 0V15.5H9v4.25a.749.749 0 1 1-1.5 0V15.5h-.75a.75.75 0 0 1-.75-.75V12.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M22.25 19.5H1.75a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5"/></g><defs><clipPath id="a"><path fill="currentColor" d="M1 3h22v18H1z"/></clipPath></defs>
  </svg>
));

IconDepartmentFill.displayName = "IconDepartmentFill";
