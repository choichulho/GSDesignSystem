import * as React from "react";

export const IconThumbsDown = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21 13.5c0 .827-.673 1.5-1.5 1.5h-6.75a.75.75 0 0 0 0 1.5h.75V20c0 .827-.673 1.5-1.5 1.5h-.755l-.815-4.344a2 2 0 0 0-.38-.851L7.5 12.99V4.5h9C18.982 4.5 21 6.519 21 9zM3 12h3V4.5H3zm13.5-9H2.25a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75H6l2.861 3.719q.072.096.095.212l.891 4.753a1 1 0 0 0 .983.816H12a3 3 0 0 0 3-3v-3.5h4.5a3 3 0 0 0 3-3V9a6 6 0 0 0-6-6" clipRule="evenodd"/>
  </svg>
));

IconThumbsDown.displayName = "IconThumbsDown";
