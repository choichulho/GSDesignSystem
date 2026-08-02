import * as React from "react";

export const IconBoltCircle = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20.5 12c0-4.685-3.815-8.5-8.5-8.5S3.5 7.315 3.5 12s3.815 8.5 8.5 8.5 8.5-3.815 8.5-8.5M2 12C2 6.475 6.475 2 12 2s10 4.475 10 10-4.475 10-10 10S2 17.525 2 12m11.66-1.47 2.17.765a1 1 0 0 1 .375 1.65l-5.33 5.33c-.52.52-1.395.06-1.27-.66l.73-4.145-2.17-.765a1 1 0 0 1-.375-1.65l5.33-5.33c.52-.52 1.395-.06 1.27.66z" clipRule="evenodd"/>
  </svg>
));

IconBoltCircle.displayName = "IconBoltCircle";
