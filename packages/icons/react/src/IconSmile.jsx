import * as React from "react";

export const IconSmile = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m18.5 0c0-4.687-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5m-5.08 2.515c.225-.304.654-.371.977-.177.372.223.488.723.23 1.072a5.747 5.747 0 0 1-9.254 0c-.258-.35-.142-.849.23-1.072.323-.194.752-.127.976.177A4.24 4.24 0 0 0 12 16.25a4.24 4.24 0 0 0 3.42-1.735M10.5 10.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M15.25 12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5" clipRule="evenodd"/>
  </svg>
));

IconSmile.displayName = "IconSmile";
