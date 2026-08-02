import * as React from "react";

export const IconPhoneCircle = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M3.5 12c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5S3.5 7.313 3.5 12M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m13.235.932 1.172.91c.73.568.797 1.647.143 2.3l-.314.314c-1.268 1.268-4.119.228-6.52-2.173-2.4-2.4-3.44-5.251-2.172-6.519l.313-.314a1.537 1.537 0 0 1 2.3.143l.911 1.172c.318.408.282.988-.084 1.353l-.362.362a.767.767 0 0 0-.054 1.029 14.4 14.4 0 0 0 1.923 1.923.767.767 0 0 0 1.029-.054l.362-.362a1.024 1.024 0 0 1 1.353-.084" clipRule="evenodd"/>
  </svg>
));

IconPhoneCircle.displayName = "IconPhoneCircle";
