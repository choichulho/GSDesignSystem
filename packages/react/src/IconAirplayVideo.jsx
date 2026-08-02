import * as React from "react";

export const IconAirplayVideo = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4 4h16c1.655 0 3 1.345 3 3v8c0 1.655-1.345 3-3 3h-2.86l-1.32-1.5H20c.825 0 1.5-.675 1.5-1.5V7c0-.825-.675-1.5-1.5-1.5H4c-.825 0-1.5.675-1.5 1.5v8c0 .825.675 1.5 1.5 1.5h4.18L6.86 18H4c-1.655 0-3-1.345-3-3V7c0-1.655 1.345-3 3-3m13.93 17.17-5.555-6.315a.5.5 0 0 0-.75 0L6.07 21.17a.5.5 0 0 0 .375.83h11.11a.5.5 0 0 0 .375-.83" clipRule="evenodd"/>
  </svg>
));

IconAirplayVideo.displayName = "IconAirplayVideo";
