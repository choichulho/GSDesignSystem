import * as React from "react";

export const IconBoltFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M13.96 2c-.245 0-.49.09-.7.295l-7.675 7.68a1.99 1.99 0 0 0-.58 1.58 1.99 1.99 0 0 0 1.31 1.715l3.045 1.11-1.135 6.445c-.12.675.42 1.175.995 1.175.245 0 .49-.09.7-.295l7.68-7.68q.219-.219.355-.475a2.01 2.01 0 0 0-.14-2.105 1.96 1.96 0 0 0-.945-.715l-3.045-1.11 1.135-6.445C15.08 2.5 14.54 2 13.965 2z"/>
  </svg>
));

IconBoltFill.displayName = "IconBoltFill";
