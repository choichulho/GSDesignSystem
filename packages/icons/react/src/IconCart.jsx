import * as React from "react";

export const IconCart = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M7.655 17a1.25 1.25 0 0 1-1.227-1.012l-.29-1.488H18.92a2 2 0 0 0 1.963-1.618l1.088-5.596A1.5 1.5 0 0 0 20.499 5.5H4.383l-.406-2.084A1.75 1.75 0 0 0 2.258 2H.75a.75.75 0 0 0 0 1.5h1.507a.25.25 0 0 1 .246.202l2.452 12.573a2.754 2.754 0 0 0 2.7 2.225H18.75a.75.75 0 1 0 0-1.5zM4.675 7H20.5l-1.088 5.595a.5.5 0 0 1-.491.405H5.845zM7.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clipRule="evenodd"/>
  </svg>
));

IconCart.displayName = "IconCart";
