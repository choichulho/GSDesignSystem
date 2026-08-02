import * as React from "react";

export const IconProductAltFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m15.527 18 .075-.013c.76-.174 2.398-.9 2.398-3.487s-1.639-3.314-2.399-3.487L15.526 11v.112q.033.004.081.024c.087.038.222.135.341.278.479.574.588 1.652.601 3.086.015 1.434-.122 2.512-.6 3.085-.12.143-.255.24-.342.279a.3.3 0 0 1-.08.023zm-1.939-6.864a.4.4 0 0 1 .08-.024V11l-.075.013c-.759.173-2.399.9-2.399 3.487s1.64 3.313 2.399 3.487l.075.013v-.113a.3.3 0 0 1-.08-.023 1.1 1.1 0 0 1-.343-.279c-.477-.573-.615-1.651-.6-3.085.012-1.434.123-2.512.6-3.086.12-.143.256-.24.343-.278M15 3h3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h3v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 15 6zm-1.5 3h-3V3h3z" clipRule="evenodd"/>
  </svg>
));

IconProductAltFill.displayName = "IconProductAltFill";
