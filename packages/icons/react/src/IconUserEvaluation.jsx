import * as React from "react";

export const IconUserEvaluation = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.5 20c0 .85.65 1.5 1.5 1.5h3.25c.4 0 .75.35.75.75s-.35.75-.75.75H5c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h10c1.65 0 3 1.35 3 3v2.25c0 .4-.35.75-.75.75s-.75-.35-.75-.75V5c0-.85-.65-1.5-1.5-1.5H5c-.85 0-1.5.65-1.5 1.5zm16.85 1.5c-.45-1.15-1.65-2-3.1-2H15.8c-1.45 0-2.65.85-3.1 2zM15.8 18h1.45c2.6 0 4.75 2 4.8 4.45 0 .3-.25.55-.6.55h-9.8c-.35 0-.6-.25-.6-.55C11.05 20 13.2 18 15.8 18m.7-5.5c.85 0 1.5.65 1.5 1.5s-.65 1.5-1.5 1.5S15 14.85 15 14s.65-1.5 1.5-1.5m0-1.5c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3m-4.75-3.55c.3-.3.75-.3 1.05 0 .25.3.25.8.05 1.1L9.1 12.3c-.15.15-.35.2-.55.2s-.4-.05-.55-.2l-1.75-1.75c-.3-.3-.3-.75 0-1.05s.75-.3 1.05 0l1.2 1.2z" clipRule="evenodd"/>
  </svg>
));

IconUserEvaluation.displayName = "IconUserEvaluation";
