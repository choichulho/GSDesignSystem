import * as React from "react";

export const IconVideoAddFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12.25 12.787h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 1 1 1.5 0v2.5h2.5a.75.75 0 1 1 0 1.5m8.286-6.539L17 9.215V7.5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.803l3.536 2.967c.976.82 2.464.125 2.464-1.15V7.398c0-1.274-1.488-1.968-2.464-1.149" clipRule="evenodd"/>
  </svg>
));

IconVideoAddFill.displayName = "IconVideoAddFill";
