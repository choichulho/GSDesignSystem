import * as React from "react";

export const IconVideoAdd = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m17 12.739 4.5 3.776V7.398L17 11.172zM14 18c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5H4c-.827 0-1.5.673-1.5 1.5v9c0 .827.673 1.5 1.5 1.5zm6.536-11.752c.291-.244.627-.354.956-.354.774 0 1.508.609 1.508 1.503v9.118c0 .894-.733 1.502-1.508 1.502-.329 0-.666-.109-.956-.353L17 14.697V16.5a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1.714zM9.75 11.286h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 1 1 1.5 0z" clipRule="evenodd"/>
  </svg>
));

IconVideoAdd.displayName = "IconVideoAdd";
