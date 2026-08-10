import * as React from "react";

export const IconComment = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20.5 15c0 .827-.673 1.5-1.5 1.5h-5.588a1.5 1.5 0 0 0-1.06.44L9.5 19.79V18A1.5 1.5 0 0 0 8 16.5H5c-.827 0-1.5-.673-1.5-1.5V5c0-.827.673-1.5 1.5-1.5h14c.827 0 1.5.673 1.5 1.5zM19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3v2.998a1 1 0 0 0 1.707.707L13.412 18H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3" clipRule="evenodd"/>
  </svg>
));

IconComment.displayName = "IconComment";
