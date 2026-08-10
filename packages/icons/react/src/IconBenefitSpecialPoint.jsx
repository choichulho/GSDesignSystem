import * as React from "react";

export const IconBenefitSpecialPoint = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#ff2f93" fillRule="evenodd" d="M12 1a3.04 3.04 0 0 1 1.511.402l6.978 4A3 3 0 0 1 22 8v8a3 3 0 0 1-1.51 2.598l-6.979 4a3.04 3.04 0 0 1-3.022 0l-6.978-4A3 3 0 0 1 2 16V8c0-1.072.576-2.062 1.511-2.598l6.978-4A3.03 3.03 0 0 1 12 1m0 1.5c-.265 0-.526.07-.755.201l-6.979 4A1.5 1.5 0 0 0 3.511 8v8c0 .533.29 1.031.755 1.298l6.979 4a1.53 1.53 0 0 0 1.51 0l6.979-4c.466-.267.755-.765.755-1.299V8c0-.534-.29-1.032-.755-1.3l-6.978-3.999a1.5 1.5 0 0 0-.756-.2m.585 3.926 1.122 3.519 3.717-.029c.6-.004.85.76.362 1.105l-3.025 2.147 1.176 3.5c.19.565-.464 1.038-.947.684L12 15.16l-2.99 2.192c-.482.354-1.136-.119-.946-.683l1.175-3.501-3.024-2.147c-.487-.346-.238-1.11.361-1.105l3.718.029 1.122-3.52c.18-.566.99-.566 1.17 0" clipRule="evenodd"/>
  </svg>
));

IconBenefitSpecialPoint.displayName = "IconBenefitSpecialPoint";
