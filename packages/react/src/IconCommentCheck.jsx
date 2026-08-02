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
    <path fill="currentColor" fillRule="evenodd" d="M19 16.5c.827 0 1.5-.673 1.5-1.5V5c0-.827-.673-1.5-1.5-1.5H5c-.827 0-1.5.673-1.5 1.5v10c0 .827.673 1.5 1.5 1.5h3A1.5 1.5 0 0 1 9.5 18v1.791l2.851-2.852a1.5 1.5 0 0 1 1.061-.439zM5 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-5.588l-3.705 3.705A1 1 0 0 1 8 20.998V18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m10.757 4.758a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1.06l-5.96 5.962h-.001a.747.747 0 0 1-1.06 0h-.002l-2.538-2.54a.75.75 0 1 1 1.06-1.06l2.01 2.008z" clipRule="evenodd"/>
  </svg>
));

IconCommentCheck.displayName = "IconCommentCheck";
