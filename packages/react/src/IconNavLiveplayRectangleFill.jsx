import * as React from "react";

export const IconNavLiveplayRectangleFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M20 5H8c-3.3 0-6 2.7-6 6v6c0 3.3 2.7 6 6 6h12c3.3 0 6-2.7 6-6v-6c0-3.3-2.7-6-6-6m-1.95 9.9-6 3.45c-.7.4-1.55-.1-1.55-.9v-6.9c0-.8.85-1.3 1.55-.9l6 3.45c.7.4.7 1.4 0 1.8"/>
  </svg>
));

IconNavLiveplayRectangleFill.displayName = "IconNavLiveplayRectangleFill";
