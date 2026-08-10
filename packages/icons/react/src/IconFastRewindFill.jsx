import * as React from "react";

export const IconFastRewindFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M9.28 6.155c.42-.245.895-.185 1.24.06.285.205.48.535.48.935V17.2c0 .445-.24.8-.575.995a1.13 1.13 0 0 1-1.145 0L.575 13.17c-.19-.11-.335-.26-.43-.435a1.2 1.2 0 0 1-.145-.56c0-.195.05-.385.145-.56s.24-.324.43-.434zm11 0A1.15 1.15 0 0 1 22 7.15V17.2c0 .445-.24.8-.575.995a1.13 1.13 0 0 1-1.145 0l-8.705-5.025a1.2 1.2 0 0 1-.34-.295 1.17 1.17 0 0 1-.235-.7c0-.195.05-.385.145-.56s.24-.324.43-.434z"/>
  </svg>
));

IconFastRewindFill.displayName = "IconFastRewindFill";
