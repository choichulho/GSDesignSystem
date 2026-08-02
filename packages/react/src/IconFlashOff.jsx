import * as React from "react";

export const IconFlashOff = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16.427 3.5H9.97l-.638 2.705-1.247-1.247.516-2.187A1 1 0 0 1 9.574 2h7.485a1 1 0 0 1 .973 1.23l-1.355 5.745h2.655a1 1 0 0 1 .787 1.615l-2.808 3.595-1.069-1.07 2.064-2.64h-3.523l.434-1.845zm-4.26 10.235-.913 5.765 3.127-4.001-2.152-2.152zM8.523 9.64 7.965 12h2.917zm7.858 5.736 4.9 4.9a.75.75 0 0 1-1.06 1.061l-4.77-4.77-4.8 6.142a.73.73 0 0 1-.58.291c-.423 0-.832-.36-.75-.87l1.366-8.63H7.333a1 1 0 0 1-.973-1.23l.915-3.877L2.72 3.838a.75.75 0 1 1 1.06-1.061l3.9 3.9v-.002l1.247 1.247v.002l6.384 6.383z" clipRule="evenodd"/>
  </svg>
));

IconFlashOff.displayName = "IconFlashOff";
