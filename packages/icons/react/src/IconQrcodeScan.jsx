import * as React from "react";

export const IconQrcodeScan = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M3.75 9a.75.75 0 0 0 .75-.75V6A1.5 1.5 0 0 1 6 4.5h2.25a.75.75 0 0 0 0-1.5H6a3 3 0 0 0-3 3v2.25c0 .414.336.75.75.75M18 3h-2.25a.75.75 0 0 0 0 1.5H18A1.5 1.5 0 0 1 19.5 6v2.25a.75.75 0 0 0 1.5 0V6a3 3 0 0 0-3-3m1.5 12.75a.75.75 0 0 1 1.5 0V18a3 3 0 0 1-3 3h-2.25a.75.75 0 0 1 0-1.5H18a1.5 1.5 0 0 0 1.5-1.5zM8.25 19.5H6A1.5 1.5 0 0 1 4.5 18v-2.25a.75.75 0 0 0-1.5 0V18a3 3 0 0 0 3 3h2.25a.75.75 0 0 0 0-1.5m1.5-9.75h-1v-1h1z"/><path fill="currentColor" fillRule="evenodd" d="M7.75 7h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 7.75 7m2.75 3.5H8V8h2.5z" clipRule="evenodd"/><path fill="currentColor" d="M9.75 15.25h-1v-1h1z"/><path fill="currentColor" fillRule="evenodd" d="M10.75 12.5h-3a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75M8 16h2.5v-2.5H8z" clipRule="evenodd"/><path fill="currentColor" d="M14.25 15.25h1v-1h-1zm0-5.5h1v-1h-1z"/><path fill="currentColor" fillRule="evenodd" d="M17 10.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75zm-1-.25h-2.5V8H16z" clipRule="evenodd"/><path fill="currentColor" d="M13 14h1v-1h-1zm3.5-1v1h-1v-1zM13 16.5h1v-1h-1zm2.5-1h1v1h-1z"/>
  </svg>
));

IconQrcodeScan.displayName = "IconQrcodeScan";
