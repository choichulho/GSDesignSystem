import * as React from "react";

export const IconChatDot = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m20.244 20.292-.861-3.216-.154-.571.278-.522A8.4 8.4 0 0 0 20.5 12c0-4.687-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12s3.813 8.5 8.5 8.5c1.373 0 2.69-.323 3.914-.96l.518-.27.563.151zM22 12a9.95 9.95 0 0 1-1.169 4.688l1.085 4.052a1 1 0 0 1-1.224 1.225l-4.085-1.095A9.95 9.95 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-6.576 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-6.5 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" clipRule="evenodd"/>
  </svg>
));

IconChatDot.displayName = "IconChatDot";
