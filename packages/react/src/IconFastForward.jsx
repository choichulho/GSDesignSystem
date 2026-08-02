import * as React from "react";

export const IconFastForward = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)"><path d="M12.425 11.18 3.72 6.155A1.15 1.15 0 0 0 3.15 6c-.29 0-.565.11-.775.3-.225.205-.375.5-.375.85V17.2c0 .335.135.62.35.825s.5.325.8.325c.19 0 .385-.05.57-.155l8.705-5.025c.16-.09.285-.21.38-.35.13-.19.195-.42.195-.645 0-.195-.05-.385-.145-.56a1.1 1.1 0 0 0-.43-.435M3.5 16.59V7.76l7.645 4.415zm19.925-5.41L14.72 6.155A1.15 1.15 0 0 0 14.15 6a1.15 1.15 0 0 0-1.145 1.15V17.2c0 .32.125.595.325.8.215.22.515.35.825.35.19 0 .385-.05.57-.155l8.705-5.025q.194-.111.32-.275c.17-.21.25-.465.25-.72a1.14 1.14 0 0 0-.575-.99zM14.5 16.59V7.76l7.645 4.415z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M2 6h22v12.35H2z"/></clipPath></defs>
  </svg>
));

IconFastForward.displayName = "IconFastForward";
