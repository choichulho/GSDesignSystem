import * as React from "react";

export const IconQuestion = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M17 11.5c0-1.8-.5-6-5-6s-5 4.2-5 6 .5 6 5 6q.629-.002 1.159-.105l-1.26-1.795c-.4-.55-.25-1.35.3-1.75s1.35-.25 1.75.3l1.462 2.084C16.789 14.848 17 12.668 17 11.5m-.136 6.806c1.757-1.55 2.636-4.02 2.636-6.806C19.5 6.8 17 3 12 3s-7.5 3.8-7.5 8.5S7 20 12 20c.994 0 1.889-.15 2.685-.427l.615.877c.4.55 1.2.7 1.75.3.6-.35.75-1.15.3-1.75z" clipRule="evenodd"/>
  </svg>
));

IconQuestion.displayName = "IconQuestion";
