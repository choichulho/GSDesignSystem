import * as React from "react";

export const IconChatAdd = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m20.244 20.292-.862-3.216a1.5 1.5 0 0 1 .125-1.093A8.4 8.4 0 0 0 20.5 12c0-4.687-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12s3.813 8.5 8.5 8.5a8.4 8.4 0 0 0 3.914-.96 1.5 1.5 0 0 1 1.081-.119zM22 12a9.95 9.95 0 0 1-1.169 4.688l1.086 4.052a1.002 1.002 0 0 1-1.225 1.225l-4.085-1.095A9.95 9.95 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9.25-.75h2.5c.413 0 .75.338.75.75s-.337.75-.75.75h-2.5v2.5c0 .412-.337.75-.75.75a.75.75 0 0 1-.75-.75v-2.5h-2.5A.75.75 0 0 1 8 12c0-.412.338-.75.75-.75h2.5v-2.5c0-.412.338-.75.75-.75.413 0 .75.338.75.75z" clipRule="evenodd"/>
  </svg>
));

IconChatAdd.displayName = "IconChatAdd";
