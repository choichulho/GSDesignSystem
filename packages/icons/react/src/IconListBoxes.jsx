import * as React from "react";

export const IconListBoxes = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M6.25 16c.415 0 .75.335.75.75v3.5c0 .415-.335.75-.75.75h-3.5a.75.75 0 0 1-.75-.75v-3.5c0-.415.335-.75.75-.75zM3.5 17.5v2h2v-2z" clipRule="evenodd"/><path fill="currentColor" d="M21.25 17.75a.749.749 0 1 1 0 1.5h-10.5a.749.749 0 1 1 0-1.5z"/><path fill="currentColor" fillRule="evenodd" d="M6.25 9.5c.415 0 .75.335.75.75v3.5c0 .415-.335.75-.75.75h-3.5a.75.75 0 0 1-.75-.75v-3.5c0-.415.335-.75.75-.75zM3.5 13h2v-2h-2z" clipRule="evenodd"/><path fill="currentColor" d="M21.25 11.25a.749.749 0 1 1 0 1.5h-10.5a.749.749 0 1 1 0-1.5z"/><path fill="currentColor" fillRule="evenodd" d="M6.25 3c.415 0 .75.335.75.75v3.5c0 .415-.335.75-.75.75h-3.5A.75.75 0 0 1 2 7.25v-3.5c0-.415.335-.75.75-.75zM3.5 6.5h2v-2h-2z" clipRule="evenodd"/><path fill="currentColor" d="M21.25 4.75a.749.749 0 1 1 0 1.5h-10.5a.749.749 0 1 1 0-1.5z"/>
  </svg>
));

IconListBoxes.displayName = "IconListBoxes";
