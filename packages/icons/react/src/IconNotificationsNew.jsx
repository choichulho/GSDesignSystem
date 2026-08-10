import * as React from "react";

export const IconNotificationsNew = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M10.007 19.5c0 1.102.897 2 2 2s2-.898 2-2zm9.5-7.75v1.757l1.615 1.614c.562.563.878 1.327.878 2.121v.258a2 2 0 0 1-2 2h-4.493a3.5 3.5 0 0 1-7 0H4a2 2 0 0 1-2-2v-.258a3 3 0 0 1 .878-2.121l1.629-1.628V10a7.5 7.5 0 0 1 6.75-7.462V1.75a.75.75 0 1 1 1.5 0v.788c.406.04.8.117 1.184.221a.755.755 0 0 1 .559.728.746.746 0 0 1-.946.719 5.95 5.95 0 0 0-2.689-.097c-2.856.546-4.858 3.15-4.858 6.059v3.325c0 .398-.158.78-.44 1.06L3.94 16.182a1.5 1.5 0 0 0-.44 1.061v.258a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-.258c0-.398-.157-.779-.439-1.06l-1.614-1.614a1.5 1.5 0 0 1-.44-1.061V11.75a.75.75 0 1 1 1.5 0M22 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" clipRule="evenodd"/>
  </svg>
));

IconNotificationsNew.displayName = "IconNotificationsNew";
