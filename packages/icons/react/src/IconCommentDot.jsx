import * as React from "react";

export const IconCommentDot = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M15.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M12 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"/><path fill="currentColor" fillRule="evenodd" d="M5 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-5.588l-3.705 3.705A1 1 0 0 1 8 20.998V18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m15.5 3c0-.827-.673-1.5-1.5-1.5H5c-.827 0-1.5.673-1.5 1.5v10c0 .827.673 1.5 1.5 1.5h3A1.5 1.5 0 0 1 9.5 18v1.791l2.851-2.852a1.5 1.5 0 0 1 1.061-.439H19c.827 0 1.5-.673 1.5-1.5z" clipRule="evenodd"/>
  </svg>
));

IconCommentDot.displayName = "IconCommentDot";
