import * as React from "react";

export const IconFlashOffFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19.332 8.975a1 1 0 0 1 .788 1.615l-2.809 3.594-9.226-9.226.516-2.187A1 1 0 0 1 9.574 2h7.485a1 1 0 0 1 .973 1.23l-1.354 5.745zm-2.952 6.401 4.9 4.9a.751.751 0 0 1-1.06 1.062l-4.77-4.771-4.799 6.142c-.476.61-1.453.186-1.332-.579l1.368-8.63H7.334a1 1 0 0 1-.974-1.23l.915-3.877L2.72 3.838a.75.75 0 1 1 1.06-1.061l3.9 3.899v-.001z" clipRule="evenodd"/>
  </svg>
));

IconFlashOffFill.displayName = "IconFlashOffFill";
