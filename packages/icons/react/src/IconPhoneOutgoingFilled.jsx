import * as React from "react";

export const IconPhoneOutgoingFilled = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M13.75 3h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-6.22 6.22a.751.751 0 0 1-1.06-1.06l6.22-6.22h-4.69a.75.75 0 0 1 0-1.5m3.328 12.056 2.287 1.78a3 3 0 0 1 .28 4.49l-.613.613c-2.475 2.474-8.042.444-12.728-4.243C1.618 13.01-.414 7.443 2.062 4.968l.612-.613a3 3 0 0 1 4.49.28l1.78 2.287a2 2 0 0 1-.165 2.642l-.707.707a1.496 1.496 0 0 0-.105 2.008 28 28 0 0 0 1.789 1.965 28 28 0 0 0 1.965 1.79c.592.49 1.464.438 2.008-.106l.707-.707a2 2 0 0 1 2.642-.165" clipRule="evenodd"/>
  </svg>
));

IconPhoneOutgoingFilled.displayName = "IconPhoneOutgoingFilled";
