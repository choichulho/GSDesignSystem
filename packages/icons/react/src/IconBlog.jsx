import * as React from "react";

export const IconBlog = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19 9a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v3.5A.5.5 0 0 0 5 9zM5 3h14a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m14 16.5a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5V19a.5.5 0 0 0 .5.5zm-3.5-6H19a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2m-5.75 0h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5m-6 4.5h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5" clipRule="evenodd"/>
  </svg>
));

IconBlog.displayName = "IconBlog";
