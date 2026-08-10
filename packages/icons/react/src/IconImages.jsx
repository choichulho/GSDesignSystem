import * as React from "react";

export const IconImages = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M7.75 9.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"/><path fill="currentColor" fillRule="evenodd" d="M15 3H6C4.345 3 3 4.345 3 6v9c0 1.655 1.345 3 3 3 0 1.655 1.345 3 3 3h9c1.655 0 3-1.345 3-3V9c0-1.655-1.345-3-3-3 0-1.655-1.345-3-3-3m3 4.5V15c0 1.655-1.345 3-3 3H7.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5m-3-3c.825 0 1.5.675 1.5 1.5v5.02l-1.695-1.695a1.66 1.66 0 0 0-2.36 0l-3.25 3.25-.94-.94a1.25 1.25 0 0 0-.885-.365c-.32 0-.64.12-.885.365l-1.99 1.99V6c0-.825.675-1.5 1.5-1.5z" clipRule="evenodd"/>
  </svg>
));

IconImages.displayName = "IconImages";
