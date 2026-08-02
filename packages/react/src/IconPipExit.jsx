import * as React from "react";

export const IconPipExit = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M20.5 12.5c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1zm0-1.5h-8c-1.4 0-2.5 1.1-2.5 2.5v5c0 1.4 1.1 2.5 2.5 2.5h8c1.4 0 2.5-1.1 2.5-2.5v-5c0-1.4-1.1-2.5-2.5-2.5M8.8 9.7 6.55 7.5h1.2c.4 0 .75-.35.75-.75S8.15 6 7.75 6h-3c-.4 0-.75.35-.75.75v3c0 .4.35.75.75.75s.75-.35.75-.75v-1.2l2.2 2.2c.3.3.75.3 1.05 0s.3-.75.05-1.05"/><path fill="currentColor" d="M16 3H4C2.35 3 1 4.35 1 6v8c0 1.65 1.35 3 3 3h3.75c.4 0 .75-.35.75-.75s-.35-.75-.75-.75H4c-.85 0-1.5-.65-1.5-1.5V6c0-.85.65-1.5 1.5-1.5h12c.85 0 1.5.65 1.5 1.5v2.75c0 .4.35.75.75.75s.75-.35.75-.75V6c0-1.65-1.35-3-3-3"/>
  </svg>
));

IconPipExit.displayName = "IconPipExit";
