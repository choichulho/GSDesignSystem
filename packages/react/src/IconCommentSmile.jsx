import * as React from "react";

export const IconCommentSmile = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19 16.5c.827 0 1.5-.673 1.5-1.5V5c0-.827-.673-1.5-1.5-1.5H5c-.827 0-1.5.673-1.5 1.5v10c0 .827.673 1.5 1.5 1.5h3A1.5 1.5 0 0 1 9.5 18v1.791l2.851-2.852a1.5 1.5 0 0 1 1.061-.439zM5 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-5.588l-3.705 3.705A1 1 0 0 1 8 20.998V18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m10.199 10h.07c.612 0 .97.717.58 1.188A4.98 4.98 0 0 1 12 15a4.98 4.98 0 0 1-3.849-1.812C7.76 12.718 8.12 12 8.731 12h.07c.209 0 .398.103.533.262a3.49 3.49 0 0 0 5.332 0 .7.7 0 0 1 .533-.262M9.5 9V7.5c0-.55-.45-1-1-1s-1 .45-1 1V9c0 .55.45 1 1 1s1-.45 1-1m5-1.5c0-.55.45-1 1-1s1 .45 1 1V9c0 .55-.45 1-1 1s-1-.45-1-1z" clipRule="evenodd"/>
  </svg>
));

IconCommentSmile.displayName = "IconCommentSmile";
