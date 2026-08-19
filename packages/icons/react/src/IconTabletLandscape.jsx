import * as React from "react";

export const IconTabletLandscape = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M20 11.25a.75.75 0 0 0-.75-.75.75.75 0 0 0-.75.75v2.5c0 .412.337.75.75.75s.75-.338.75-.75z"/><path fill="currentColor" fillRule="evenodd" d="M4 4h16c1.65 0 3 1.35 3 3v11c0 1.65-1.35 3-3 3H4c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3m17.5 3c0-.827-.673-1.5-1.5-1.5H4c-.827 0-1.5.673-1.5 1.5v11c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5z" clipRule="evenodd"/>
  </svg>
));

IconTabletLandscape.displayName = "IconTabletLandscape";
