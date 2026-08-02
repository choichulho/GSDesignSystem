import * as React from "react";

export const IconAnswer = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m13.65 4.8 4.95 13.6c.25.65-.1 1.35-.75 1.6s-1.35-.1-1.6-.75l-1.28-3.5H8.965L7.7 19.25c-.25.65-.95 1-1.6.75s-1-.95-.75-1.6l4.9-13.6c.2-.5.7-.8 1.2-.8h1c.5-.05 1 .3 1.2.8m-3.78 8.45 2.08-5.75 2.104 5.75z" clipRule="evenodd"/>
  </svg>
));

IconAnswer.displayName = "IconAnswer";
