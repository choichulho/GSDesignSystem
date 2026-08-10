import * as React from "react";

export const IconRank = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19.5 1.5h-15c-.55 0-1 .45-1 1v.7c0 .5.25.95.65 1.25l4.227 2.923C5.785 8.7 4 11.402 4 14.5c0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.126-1.817-5.849-4.448-7.163L19.8 4.4c.45-.25.7-.7.7-1.2v-.7c0-.55-.45-1-1-1m-7.5 5c-.668 0-1.317.083-1.938.239L5 3.2V3h14v.2l-5.143 3.519A8 8 0 0 0 12 6.5M12 8c3.6 0 6.5 2.9 6.5 6.5S15.6 21 12 21s-6.5-2.9-6.5-6.5S8.4 8 12 8m1.45 4.8-.95-2.95c-.15-.45-.85-.45-.95-.05l-.95 2.95H7.5c-.5 0-.7.65-.3 1l2.5 1.8-.95 2.9c-.15.45.4.85.8.55L12 17.15l2.5 1.8c.4.3.95-.1.8-.55l-.95-2.9 2.5-1.8c.4-.25.2-.9-.3-.9z" clipRule="evenodd"/>
  </svg>
));

IconRank.displayName = "IconRank";
