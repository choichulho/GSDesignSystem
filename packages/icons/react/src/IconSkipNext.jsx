import * as React from "react";

export const IconSkipNext = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M18.5 19.25a.75.75 0 0 0 1.5 0V4.75a.75.75 0 0 0-1.5 0zM4 5.56c0-.876.719-1.503 1.502-1.503.25 0 .506.064.748.203l11.156 6.441c1 .577 1 2.02 0 2.598L6.25 19.739c-.242.14-.498.204-.748.204A1.5 1.5 0 0 1 4 18.44zM16.656 12 5.506 5.563 5.5 18.44z" clipRule="evenodd"/>
  </svg>
));

IconSkipNext.displayName = "IconSkipNext";
