import * as React from "react";

export const IconBrightnessContrast = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12 4a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .414.336.75.75.75m-4.5 8c0-2.482 2.018-4.5 4.5-4.5v9A4.505 4.505 0 0 1 7.5 12M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-5.657.343a.75.75 0 0 1-1.06 0l-1.061-1.06a.75.75 0 1 1 1.06-1.061l1.061 1.06a.75.75 0 0 1 0 1.061M3.25 11.25h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5m.972 7.468 1.06-1.061a.75.75 0 0 1 1.061 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06M12 20a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 12 20m5.657-2.343a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 1 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061m4.593-6.407h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5m-4.593-5.968 1.06-1.06a.75.75 0 1 1 1.061 1.06l-1.06 1.061a.751.751 0 0 1-1.061-1.06" clipRule="evenodd"/>
  </svg>
));

IconBrightnessContrast.displayName = "IconBrightnessContrast";
