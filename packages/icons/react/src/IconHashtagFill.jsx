import * as React from "react";

export const IconHashtagFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M20.77 7h-2.41l.62-3.555a1.234 1.234 0 0 0-2.43-.425L15.855 7h-5.97l.62-3.555a1.234 1.234 0 0 0-2.43-.425L7.38 7H4.72c-.68 0-1.23.55-1.23 1.23v.035c0 .68.55 1.23 1.23 1.23h2.22l-.875 5H3.23c-.68 0-1.23.55-1.23 1.23v.035c0 .68.55 1.23 1.23 1.23h2.41l-.62 3.555a1.234 1.234 0 0 0 2.43.425l.695-3.98h5.97l-.62 3.555a1.234 1.234 0 0 0 2.43.425l.695-3.98h2.66c.68 0 1.23-.55 1.23-1.23v-.035c0-.68-.55-1.23-1.23-1.23h-2.22l.875-5h2.845c.68 0 1.23-.55 1.23-1.23V8.23c0-.68-.55-1.23-1.23-1.23zm-6.225 7.5h-5.97l.875-5h5.97z"/>
  </svg>
));

IconHashtagFill.displayName = "IconHashtagFill";
