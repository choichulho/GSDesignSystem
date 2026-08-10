import * as React from "react";

export const IconCommentAdd = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-5.588l-3.705 3.705A1 1 0 0 1 8 20.998V18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m15.5 3c0-.827-.673-1.5-1.5-1.5H5c-.827 0-1.5.673-1.5 1.5v10c0 .827.673 1.5 1.5 1.5h3A1.5 1.5 0 0 1 9.5 18v1.791l2.851-2.852a1.5 1.5 0 0 1 1.061-.439H19c.827 0 1.5-.673 1.5-1.5zm-7.75 4h2.5c.412 0 .75.338.75.75s-.338.75-.75.75h-2.5V13c0 .412-.338.75-.75.75a.75.75 0 0 1-.75-.75v-2.5h-2.5A.75.75 0 0 1 8 9.75c0-.412.338-.75.75-.75h2.5V6.5c0-.412.338-.75.75-.75s.75.338.75.75z" clipRule="evenodd"/>
  </svg>
));

IconCommentAdd.displayName = "IconCommentAdd";
