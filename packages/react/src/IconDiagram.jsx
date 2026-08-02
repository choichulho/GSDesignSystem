import * as React from "react";

export const IconDiagram = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M13.033 2.754a.754.754 0 0 1 .817-.751 9 9 0 0 1 8.147 8.147.753.753 0 0 1-.75.817h-7.214a1 1 0 0 1-1-1zm7.35 6.713a7.48 7.48 0 0 0-5.85-5.851v5.851zm-10.199-5.43.068-.004c.408 0 .748.337.748.754V11a2 2 0 0 0 2 2h6.213c.44 0 .79.378.75.816a9 9 0 0 1-9.987 8.127c-4.127-.456-7.463-3.792-7.92-7.919a9.004 9.004 0 0 1 8.128-9.987M9.5 11V5.65a7.44 7.44 0 0 0-4.308 2.606 7.48 7.48 0 0 0-1.644 5.605c.38 3.44 3.152 6.212 6.592 6.592q.432.048.86.048a7.454 7.454 0 0 0 7.352-6H13c-1.93 0-3.5-1.57-3.5-3.5" clipRule="evenodd"/>
  </svg>
));

IconDiagram.displayName = "IconDiagram";
