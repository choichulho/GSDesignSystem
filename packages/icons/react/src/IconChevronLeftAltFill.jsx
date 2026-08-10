import * as React from "react";

export const IconChevronLeftAltFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.812-13.721L10.092 12l3.72 3.72a.75.75 0 0 1-1.061 1.061l-4.248-4.248-.001-.001-.002-.001a.75.75 0 0 1 0-1.062l.002-.001.001-.001 4.249-4.249a.75.75 0 0 1 1.06 1.061" clipRule="evenodd"/>
  </svg>
));

IconChevronLeftAltFill.displayName = "IconChevronLeftAltFill";
