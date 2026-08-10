import * as React from "react";

export const IconChatLinesFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16.75 10.5h-9.5a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5m-6 4.5h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5m10.081 1.688A9.95 9.95 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.95 9.95 0 0 0 4.607-1.13l4.085 1.095q.135.035.263.035c.631 0 1.137-.605.962-1.26z" clipRule="evenodd"/>
  </svg>
));

IconChatLinesFill.displayName = "IconChatLinesFill";
