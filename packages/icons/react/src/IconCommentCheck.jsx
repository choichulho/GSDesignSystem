import * as React from "react";

export const IconCommentCheck = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-5.588l-3.705 3.705A1 1 0 0 1 8 20.998V18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3.5c-.827 0-1.5.673-1.5 1.5v10c0 .827.673 1.5 1.5 1.5h3A1.5 1.5 0 0 1 9.5 18v1.791l2.852-2.852a1.5 1.5 0 0 1 1.06-.439H19c.827 0 1.5-.673 1.5-1.5V5c0-.827-.673-1.5-1.5-1.5zm11.287 3.038a.75.75 0 0 1 .53 1.28l-5.962 5.962a.75.75 0 0 1-1.06 0l-2.54-2.539a.75.75 0 1 1 1.061-1.06l2.01 2.009 5.43-5.432a.75.75 0 0 1 .531-.22"/>
  </svg>
));

IconCommentCheck.displayName = "IconCommentCheck";
