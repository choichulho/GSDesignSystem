import * as React from "react";

export const IconColorPalette = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19.474 14.125c.763 0 1.415-.562 1.485-1.28a8.9 8.9 0 0 0-.206-2.923c-.879-3.691-4.111-6.52-7.859-6.879A9 9 0 0 0 12 3a8.93 8.93 0 0 0-7.22 3.626c-1.723 2.31-2.22 5.286-1.364 8.162C4.504 18.446 8.025 21 11.977 21a.51.51 0 0 0 .523-.5v-2.875c0-1.93 1.57-3.5 3.5-3.5zM13.037 1.55c4.428.425 8.144 3.697 9.175 8.024a10.4 10.4 0 0 1 .24 3.417c-.148 1.508-1.463 2.634-2.979 2.634H16a2 2 0 0 0-2 2V20.5a2 2 0 0 1-1.995 2h-.028c-4.56 0-8.698-2.912-10-7.284C-.155 8.045 5.158 1.5 12 1.5q.513 0 1.037.05M7.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m9-9a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M16 11a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-8 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" clipRule="evenodd"/>
  </svg>
));

IconColorPalette.displayName = "IconColorPalette";
