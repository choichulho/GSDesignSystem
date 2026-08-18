import * as React from "react";

export const IconPipEnterFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M16 3c1.65 0 3 1.35 3 3v5h1.5c1.4 0 2.5 1.1 2.5 2.5v5c0 1.4-1.1 2.5-2.5 2.5h-8c-1.4 0-2.5-1.1-2.5-2.5V17H4c-1.65 0-3-1.35-3-3V6c0-1.65 1.35-3 3-3zM4 4.5c-.85 0-1.5.65-1.5 1.5v8c0 .85.65 1.5 1.5 1.5h6v-2c0-1.4 1.1-2.5 2.5-2.5h5V6c0-.85-.65-1.5-1.5-1.5zm.2 1.7a.9.9 0 0 1 1.1 0l2.2 2.25v-1.2c0-.4.35-.75.75-.75s.75.35.75.75v3c0 .4-.35.75-.75.75h-3c-.4 0-.75-.35-.75-.75s.35-.75.75-.75H6.4L4.2 7.3c-.25-.3-.3-.85 0-1.1"/>
  </svg>
));

IconPipEnterFill.displayName = "IconPipEnterFill";
