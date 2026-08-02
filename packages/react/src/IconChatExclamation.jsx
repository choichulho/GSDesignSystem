import * as React from "react";

export const IconChatExclamation = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m19.383 17.076.861 3.216-3.249-.87a1.5 1.5 0 0 0-1.081.118A8.4 8.4 0 0 1 12 20.5c-4.687 0-8.5-3.813-8.5-8.5S7.313 3.5 12 3.5s8.5 3.813 8.5 8.5a8.4 8.4 0 0 1-.993 3.983 1.5 1.5 0 0 0-.125 1.093m1.448-.388A9.95 9.95 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.95 9.95 0 0 0 4.607-1.13l4.085 1.095q.134.035.264.035c.63 0 1.136-.605.961-1.26zM12 14.775a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1m.75-1.65a.75.75 0 0 1-1.5 0l-.25-5a1 1 0 0 1 2 0z" clipRule="evenodd"/>
  </svg>
));

IconChatExclamation.displayName = "IconChatExclamation";
