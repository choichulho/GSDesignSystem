import * as React from "react";

export const IconLive = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20 2a2 2 0 0 1 2 2v16a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2m-6 6a2 2 0 1 0-4 0v12a2 2 0 1 0 4 0zm-8 6a2 2 0 1 0-4 0v6a2 2 0 1 0 4 0z" clipRule="evenodd"/>
  </svg>
));

IconLive.displayName = "IconLive";
