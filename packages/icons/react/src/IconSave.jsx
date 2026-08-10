import * as React from "react";

export const IconSave = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19.5 18c0 .827-.673 1.5-1.5 1.5h-1.5V14a1.5 1.5 0 0 0-1.5-1.5H9A1.5 1.5 0 0 0 7.5 14v5.5H6c-.827 0-1.5-.673-1.5-1.5V6c0-.827.673-1.5 1.5-1.5h1.5v3A1.5 1.5 0 0 0 9 9h6a1.5 1.5 0 0 0 1.5-1.5V4.871l3 3zM9 19.5h6V14H9zm0-12h6v-3H9zm11.56-.69-3.37-3.37a1.5 1.5 0 0 0-.69-.387V3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7.871a1.5 1.5 0 0 0-.44-1.06" clipRule="evenodd"/>
  </svg>
));

IconSave.displayName = "IconSave";
