import * as React from "react";

export const IconMoviePlayFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21 17c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V9h18zm-10.375-4.935a.506.506 0 0 0-.755.44V17.5c0 .385.415.63.755.44l4.43-2.495a.508.508 0 0 0 0-.885z" clipRule="evenodd"/><path fill="currentColor" d="M9.51 3 6.905 7.5H3V7c0-2.2 1.8-4 4-4zm3.395 4.5H8.64l2.6-4.5h4.27zm4.33-4.49C19.325 3.135 21 4.88 21 7v.5h-6.36z"/>
  </svg>
));

IconMoviePlayFill.displayName = "IconMoviePlayFill";
