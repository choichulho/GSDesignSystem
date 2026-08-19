import * as React from "react";

export const IconRun = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M16 10a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 1.5a4.505 4.505 0 0 0-4.5 4.5c0 2.482 2.018 4.5 4.5 4.5s4.5-2.018 4.5-4.5-2.018-4.5-4.5-4.5M17 2c1.65 0 3 1.35 3 3v2.25a.75.75 0 0 1-.75.75H3.5v9A1.5 1.5 0 0 0 5 18.5h2.25a.75.75 0 0 1 0 1.5H5c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3zm-2.54 12.32a.32.32 0 0 1 .478-.277l2.89 1.669a.332.332 0 0 1 0 .576l-2.89 1.669a.32.32 0 0 1-.478-.276zM5 3.5A1.5 1.5 0 0 0 3.5 5v1.5h15V5A1.5 1.5 0 0 0 17 3.5z"/>
  </svg>
));

IconRun.displayName = "IconRun";
