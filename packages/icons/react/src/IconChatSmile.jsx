import * as React from "react";

export const IconChatSmile = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.95 9.95 0 0 1-1.169 4.688l1.086 4.052a1.002 1.002 0 0 1-1.225 1.225l-4.085-1.095A9.95 9.95 0 0 1 12 22C6.477 22 2 17.523 2 12m18.5 0c0-4.687-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12s3.813 8.5 8.5 8.5c1.373 0 2.69-.323 3.914-.96a1.5 1.5 0 0 1 1.08-.118l3.25.87-.861-3.216a1.5 1.5 0 0 1 .124-1.093A8.4 8.4 0 0 0 20.5 12m-5.834 3.262A.7.7 0 0 1 15.2 15h.07c.612 0 .97.717.58 1.189A4.99 4.99 0 0 1 12 18a4.99 4.99 0 0 1-3.85-1.811C7.76 15.717 8.12 15 8.732 15h.07c.209 0 .398.103.533.262a3.49 3.49 0 0 0 5.332 0M8.5 12c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m6-1c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1z" clipRule="evenodd"/>
  </svg>
));

IconChatSmile.displayName = "IconChatSmile";
