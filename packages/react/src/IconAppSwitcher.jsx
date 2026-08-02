import * as React from "react";

export const IconAppSwitcher = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5.5 2h-2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2m-2 3.5h2v-2h-2zM13 2.01h-2a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5m-2 3.5h2v-2h-2zm2 4h-2a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5m-2 3.5h2v-2h-2zM11 17h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 13 22h-2a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 11 17m2 3.5h-2v-2h2zm-9.5-11h2A1.5 1.5 0 0 1 7 11v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 2 13v-2a1.5 1.5 0 0 1 1.5-1.5m2 3.5h-2v-2h2zm0 4h-2A1.5 1.5 0 0 0 2 18.5v2A1.5 1.5 0 0 0 3.5 22h2A1.5 1.5 0 0 0 7 20.5v-2A1.5 1.5 0 0 0 5.5 17m-2 3.5h2v-2h-2zM18.5 2h2A1.5 1.5 0 0 1 22 3.5v2A1.5 1.5 0 0 1 20.5 7h-2A1.5 1.5 0 0 1 17 5.5v-2A1.5 1.5 0 0 1 18.5 2m2 3.5h-2v-2h2zm0 4h-2A1.5 1.5 0 0 0 17 11v2a1.5 1.5 0 0 0 1.5 1.5h2A1.5 1.5 0 0 0 22 13v-2a1.5 1.5 0 0 0-1.5-1.5m-2 3.5h2v-2h-2zm0 4h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5m2 3.5h-2v-2h2z" clipRule="evenodd"/>
  </svg>
));

IconAppSwitcher.displayName = "IconAppSwitcher";
