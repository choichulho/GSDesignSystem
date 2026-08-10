import * as React from "react";

export const IconFolderCircle = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.5 12c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m9.947-3.353h3.903c.911 0 1.65.74 1.65 1.65v4.506a1.65 1.65 0 0 1-1.65 1.649h-7.7a1.65 1.65 0 0 1-1.65-1.65V9.199c0-.912.739-1.65 1.65-1.65h1.97c.32 0 .625.14.834.383l.367.428a.83.83 0 0 0 .626.288" clipRule="evenodd"/>
  </svg>
));

IconFolderCircle.displayName = "IconFolderCircle";
