import * as React from "react";

export const IconVip = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m13.296 18.637 2.975-9.03h4.464zM12 17.776l-2.692-8.17h5.384zm-8.735-8.17H7.73l2.975 9.032zM7.06 3.5h3.952L7.976 8.106h-4.71zm7.167 4.606H9.772L12 4.726zM16.94 3.5l3.794 4.606h-4.71L12.989 3.5zm5.832 4.72-4.824-5.856A1 1 0 0 0 17.176 2H6.824a1 1 0 0 0-.772.364L1.228 8.221a1 1 0 0 0 0 1.271l10 12.14c.2.243.486.365.772.365a1 1 0 0 0 .772-.365l10-12.14a1 1 0 0 0 0-1.271" clipRule="evenodd"/>
  </svg>
));

IconVip.displayName = "IconVip";
