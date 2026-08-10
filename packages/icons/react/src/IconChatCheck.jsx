import * as React from "react";

export const IconChatCheck = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m20.244 20.292-.862-3.216a1.5 1.5 0 0 1 .125-1.093A8.4 8.4 0 0 0 20.5 12c0-4.687-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12s3.813 8.5 8.5 8.5a8.4 8.4 0 0 0 3.914-.96 1.5 1.5 0 0 1 1.081-.119zM22 12a9.95 9.95 0 0 1-1.169 4.688l1.086 4.052a1.002 1.002 0 0 1-1.225 1.225l-4.085-1.095A9.95 9.95 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.78-3.743a.747.747 0 0 1 1.062 0 .75.75 0 0 1 0 1.06l-6.425 6.426h-.001a.747.747 0 0 1-1.06 0h-.001l-3.076-3.076a.75.75 0 1 1 1.06-1.06l2.546 2.545z" clipRule="evenodd"/>
  </svg>
));

IconChatCheck.displayName = "IconChatCheck";
