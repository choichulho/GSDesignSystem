import * as React from "react";

export const IconNavShortpickFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M8.5 3h11C22.525 3 25 5.475 25 8.5v11c0 3.025-2.475 5.5-5.5 5.5h-11C5.475 25 3 22.525 3 19.5v-11C3 5.475 5.475 3 8.5 3m1.995 4.22 9.66 5.377a1.587 1.587 0 0 1 0 2.806l-9.66 5.378C9.368 21.404 8 20.625 8 19.378V8.622c0-1.247 1.368-2.026 2.495-1.403" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M3 3h22v22H3z"/></clipPath></defs>
  </svg>
));

IconNavShortpickFill.displayName = "IconNavShortpickFill";
