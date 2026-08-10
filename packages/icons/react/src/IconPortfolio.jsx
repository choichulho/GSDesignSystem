import * as React from "react";

export const IconPortfolio = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21 18c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5V9c0-.827.673-1.5 1.5-1.5h15c.827 0 1.5.673 1.5 1.5zM8 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1H8zm11.5 1h-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v1h-2a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3" clipRule="evenodd"/>
  </svg>
));

IconPortfolio.displayName = "IconPortfolio";
