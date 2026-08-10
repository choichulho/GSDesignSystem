import * as React from "react";

export const IconFolderFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m10.704 5.05-.7-.817A2.1 2.1 0 0 0 8.409 3.5H4.65A3.15 3.15 0 0 0 1.5 6.65v10.7a3.15 3.15 0 0 0 3.15 3.15h14.7a3.15 3.15 0 0 0 3.15-3.15v-8.6a3.15 3.15 0 0 0-3.15-3.15H11.9c-.46 0-.897-.201-1.197-.55" clipRule="evenodd"/>
  </svg>
));

IconFolderFill.displayName = "IconFolderFill";
