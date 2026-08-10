import * as React from "react";

export const IconFolderShared = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M19.35 19c.91 0 1.65-.74 1.65-1.65v-8.6c0-.91-.74-1.65-1.65-1.65H11.9a3.07 3.07 0 0 1-2.335-1.073l-.7-.817A.6.6 0 0 0 8.409 5H4.65C3.74 5 3 5.74 3 6.65v10.7c0 .91.74 1.65 1.65 1.65h5.034c.51-1.445 2.032-2.5 3.816-2.5h2c1.784 0 3.305 1.055 3.817 2.5zm-5.85-1c-.886 0-1.684.406-2.13 1h6.262c-.444-.593-1.244-1-2.132-1zM11.9 5.6h7.45a3.15 3.15 0 0 1 3.15 3.15v8.6a3.15 3.15 0 0 1-3.15 3.15H4.65a3.15 3.15 0 0 1-3.15-3.15V6.65A3.15 3.15 0 0 1 4.65 3.5h3.759a2.1 2.1 0 0 1 1.595.734l.7.816c.299.35.736.55 1.195.55m1.6 7.4a1.001 1.001 0 0 0 2 0 1.001 1.001 0 0 0-2 0M12 13a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0" clipRule="evenodd"/>
  </svg>
));

IconFolderShared.displayName = "IconFolderShared";
