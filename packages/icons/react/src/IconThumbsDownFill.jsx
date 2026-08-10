import * as React from "react";

export const IconThumbsDownFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2 10.75v-9A.75.75 0 0 1 2.75 1H5.5v10.5H2.75a.75.75 0 0 1-.75-.75M8 1h9a6 6 0 0 1 6 6v4.5a3 3 0 0 1-3 3h-5V18a3 3 0 0 1-3 3h-.67a1 1 0 0 1-.983-.816l-.891-4.753a.5.5 0 0 0-.095-.212L7 12.15V1z" clipRule="evenodd"/>
  </svg>
));

IconThumbsDownFill.displayName = "IconThumbsDownFill";
