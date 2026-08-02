import * as React from "react";

export const IconTwitter = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M22 5.926a8.2 8.2 0 0 1-2.356.646 4.12 4.12 0 0 0 1.804-2.271 8.2 8.2 0 0 1-2.605.996 4.103 4.103 0 0 0-6.991 3.741 11.64 11.64 0 0 1-8.458-4.286 4.1 4.1 0 0 0-.559 2.062c0 1.424.728 2.679 1.828 3.416a4.1 4.1 0 0 1-1.86-.514v.052a4.11 4.11 0 0 0 3.291 4.025 4.1 4.1 0 0 1-1.851.069 4.1 4.1 0 0 0 3.831 2.848 8.2 8.2 0 0 1-5.093 1.757q-.498 0-.981-.058a11.6 11.6 0 0 0 6.291 1.845c7.547 0 11.675-6.252 11.675-11.674 0-.177-.007-.354-.012-.531A8.4 8.4 0 0 0 22 5.926" clipRule="evenodd"/>
  </svg>
));

IconTwitter.displayName = "IconTwitter";
