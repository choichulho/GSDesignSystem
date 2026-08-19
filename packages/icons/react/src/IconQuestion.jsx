import * as React from "react";

export const IconQuestion = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 3c5 0 7.5 3.8 7.5 8.5 0 2.787-.879 5.257-2.637 6.807l.487.693c.45.6.3 1.4-.3 1.75-.55.4-1.35.25-1.75-.3l-.617-.88c-.796.276-1.69.43-2.683.43-5 0-7.5-3.8-7.5-8.5S7 3 12 3m0 2.5c-4.5 0-5 4.2-5 6s.5 6 5 6c.42 0 .805-.038 1.158-.105L11.9 15.6c-.4-.55-.25-1.35.3-1.75s1.35-.25 1.75.3l1.46 2.082C16.787 14.847 17 12.668 17 11.5c0-1.8-.5-6-5-6" clipRule="evenodd"/>
  </svg>
));

IconQuestion.displayName = "IconQuestion";
