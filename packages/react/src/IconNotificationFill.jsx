import * as React from "react";

export const IconNotificationFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12.007 21.5c-1.103 0-2-.897-2-2h4c0 1.103-.897 2-2 2m9.114-6.379-1.614-1.614V10a7.5 7.5 0 0 0-6.75-7.462V1.75a.75.75 0 1 0-1.5 0v.788A7.5 7.5 0 0 0 4.507 10v3.493l-1.629 1.628A3 3 0 0 0 2 17.243v.258a2 2 0 0 0 2 2h4.507a3.5 3.5 0 0 0 7 0H20a2 2 0 0 0 2-2v-.258a3 3 0 0 0-.879-2.12" clipRule="evenodd"/>
  </svg>
));

IconNotificationFill.displayName = "IconNotificationFill";
