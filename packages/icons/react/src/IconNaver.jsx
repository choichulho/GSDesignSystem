import * as React from "react";

export const IconNaver = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16.298 15.938h-2.942l-2.722-3.973v3.973H7.702V8.061h2.942l2.721 3.973V8.062h2.933zM19.448 3H4.552C3.698 3 3 3.697 3 4.553v14.895C3 20.302 3.698 21 4.552 21h14.896c.854 0 1.552-.698 1.552-1.552V4.553C21 3.697 20.302 3 19.448 3" clipRule="evenodd"/>
  </svg>
));

IconNaver.displayName = "IconNaver";
