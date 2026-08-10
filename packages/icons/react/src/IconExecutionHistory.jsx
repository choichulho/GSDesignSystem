import * as React from "react";

export const IconExecutionHistory = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.325 6.73 1.755 12.46 2.01c5.26.235 9.505 4.665 9.54 9.935.005 1.02-.145 2.01-.425 2.94-.12.395-.52.66-.935.54a.75.75 0 0 1-.52-.935c.245-.79.38-1.625.38-2.49 0-5.005-4.35-9.015-9.47-8.445-3.895.435-7.04 3.58-7.475 7.475-.57 5.12 3.44 9.47 8.445 9.47.17 0 .335-.01.5-.02.44-.03.815.305.815.745 0 .39-.3.72-.69.75A9 9 0 0 1 12 22C6.475 22 2 17.675 2 12m7.77 2.86a.76.76 0 0 1-.48.175h-.005A.751.751 0 0 1 8.8 13.71l2.45-2.06v-4.9a.749.749 0 1 1 1.5 0V12c0 .22-.095.43-.265.575zm6.445 7.515L21.54 19.3a.93.93 0 0 0 0-1.605l-5.325-3.075a.923.923 0 0 0-1.385.8v6.145c0 .54.445.925.925.925q.234.001.46-.125zm.11-5.955 3.6 2.08-3.6 2.08z" clipRule="evenodd"/>
  </svg>
));

IconExecutionHistory.displayName = "IconExecutionHistory";
