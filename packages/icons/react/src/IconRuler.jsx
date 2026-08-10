import * as React from "react";

export const IconRuler = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21.5 15a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h3v2.25a.75.75 0 0 0 1.5 0V9.5h4v2.25a.75.75 0 0 0 1.5 0V9.5h4v2.25a.75.75 0 0 0 1.5 0V9.5H21a.5.5 0 0 1 .5.5zM21 8H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2" clipRule="evenodd"/>
  </svg>
));

IconRuler.displayName = "IconRuler";
