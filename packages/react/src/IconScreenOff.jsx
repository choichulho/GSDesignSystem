import * as React from "react";

export const IconScreenOff = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21 14.5V6a1.5 1.5 0 0 0-.412-1.027L9.561 16h9.94c.826 0 1.5-.673 1.5-1.5m1.28-12.28a.75.75 0 0 1 0 1.06l-.634.636c.525.539.854 1.271.854 2.084v8.5a3 3 0 0 1-3 3h-6.75v3h4.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5h4.5v-3H8.06l-4.28 4.28a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 0 1 1.06 0M5.32 16l-1.436 1.436A3 3 0 0 1 1.5 14.5V6a3 3 0 0 1 3-3h13.82l-1.5 1.5H4.5C3.673 4.5 3 5.173 3 6v8.5c0 .827.673 1.5 1.5 1.5z" clipRule="evenodd"/>
  </svg>
));

IconScreenOff.displayName = "IconScreenOff";
