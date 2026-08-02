import * as React from "react";

export const IconDownToBottom = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12.001 13.749a.75.75 0 0 0 .438-.14l.092-.08 6.25-6.25a.75.75 0 0 0-.968-1.139l-.093.08L12 11.94 6.28 6.22a.75.75 0 0 0-1.06 0 .75.75 0 0 0-.073.976l.072.084 6.25 6.25a.75.75 0 0 0 .415.21zm7.249 4.5a.75.75 0 0 0 .102-1.493l-.102-.007H4.75a.75.75 0 0 0-.102 1.493l.102.007z" clipRule="evenodd"/>
  </svg>
));

IconDownToBottom.displayName = "IconDownToBottom";
