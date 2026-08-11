import * as React from "react";

export const IconPhoneCircleFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-1.432-10.491a14.5 14.5 0 0 0 1.923 1.923c.304.25.75.224 1.028-.054l.363-.362a1.024 1.024 0 0 1 1.353-.084l1.172.91c.73.568.797 1.647.143 2.3l-.314.315c-1.268 1.267-4.119.227-6.52-2.174s-3.44-5.251-2.173-6.519l.314-.314a1.537 1.537 0 0 1 2.3.143l.911 1.172c.318.408.281.988-.084 1.353l-.362.363a.766.766 0 0 0-.054 1.028" clipRule="evenodd"/>
  </svg>
));

IconPhoneCircleFill.displayName = "IconPhoneCircleFill";
