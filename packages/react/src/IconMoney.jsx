import * as React from "react";

export const IconMoney = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M20.5 13.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5h-17A.5.5 0 0 0 3 5v8a.5.5 0 0 0 .5.5zM3.5 3h17a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-17a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m8.5 7.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6m8.25 10.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zm-1 3a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5zM17 7.25a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0zM6.25 6.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75" clipRule="evenodd"/>
  </svg>
));

IconMoney.displayName = "IconMoney";
