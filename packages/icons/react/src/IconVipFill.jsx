import * as React from "react";

export const IconVipFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m12.772 21.632 10-12.14a1 1 0 0 0 0-1.271l-4.824-5.857A1 1 0 0 0 17.177 2H6.824a1 1 0 0 0-.771.364L1.228 8.221a1 1 0 0 0 0 1.271l10 12.14a1 1 0 0 0 1.544 0" clipRule="evenodd"/>
  </svg>
));

IconVipFill.displayName = "IconVipFill";
