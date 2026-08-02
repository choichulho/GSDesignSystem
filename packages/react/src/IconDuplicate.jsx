import * as React from "react";

export const IconDuplicate = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5.25 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v.75a.75.75 0 0 0 1.5 0V4.5c0-1.65-1.35-3-3-3h-9c-1.65 0-3 1.35-3 3v9c0 1.65 1.35 3 3 3h.75a.75.75 0 0 0 0-1.5M21 19.5c0 .827-.673 1.5-1.5 1.5h-9c-.827 0-1.5-.673-1.5-1.5v-9c0-.827.673-1.5 1.5-1.5h9c.827 0 1.5.673 1.5 1.5zm-1.5-12h-9c-1.65 0-3 1.35-3 3v9c0 1.65 1.35 3 3 3h9c1.65 0 3-1.35 3-3v-9c0-1.65-1.35-3-3-3m-3.75 6.75h2c.413 0 .75.338.75.75s-.337.75-.75.75h-2v2c0 .413-.338.75-.75.75a.75.75 0 0 1-.75-.75v-2h-2a.75.75 0 0 1-.75-.75c0-.412.338-.75.75-.75h2v-2c0-.412.338-.75.75-.75s.75.338.75.75z" clipRule="evenodd"/>
  </svg>
));

IconDuplicate.displayName = "IconDuplicate";
