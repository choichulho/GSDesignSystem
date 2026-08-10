import * as React from "react";

export const IconDocBlank = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M18.5 19.5c0 .827-.673 1.5-1.5 1.5H7c-.827 0-1.5-.673-1.5-1.5v-15C5.5 3.673 6.173 3 7 3h5v4.722c0 .982.796 1.778 1.778 1.778H18.5zm-5-16.146L18.102 8h-4.324a.28.28 0 0 1-.278-.278zm5.985 3.91-5.187-5.238a1.78 1.78 0 0 0-1.264-.526H7c-1.65 0-3 1.35-3 3v15c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3V8.515a1.78 1.78 0 0 0-.515-1.251" clipRule="evenodd"/>
  </svg>
));

IconDocBlank.displayName = "IconDocBlank";
