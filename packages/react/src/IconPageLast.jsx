import * as React from "react";

export const IconPageLast = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M13.625 12.123a.75.75 0 0 0-.14-.437l-.08-.093-6.25-6.25a.75.75 0 0 0-1.14.969l.08.092 5.72 5.72-5.72 5.72a.75.75 0 0 0 0 1.06.75.75 0 0 0 .976.073l.084-.072 6.25-6.25a.75.75 0 0 0 .21-.415zm4.5-7.249a.75.75 0 0 0-1.494-.101l-.006.101v14.5a.75.75 0 0 0 1.493.102l.007-.102z" clipRule="evenodd"/>
  </svg>
));

IconPageLast.displayName = "IconPageLast";
