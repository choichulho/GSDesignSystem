import * as React from "react";

export const IconCloudRefreshFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M15.813 13.41c-.182 1.824-1.645 3.33-3.463 3.557a4 4 0 0 1-4.323-2.75c-.153-.478.219-.967.722-.967h.032c.323 0 .589.221.689.528a2.49 2.49 0 0 0 2.415 1.722c1.33-.028 2.446-1.166 2.448-2.496a2.503 2.503 0 0 0-2.5-2.504c-.068 0-.132.011-.197.02a.745.745 0 0 1-.553 1.245.75.75 0 0 1-.53-.219l-1.384-1.383a.75.75 0 0 1 0-1.061l1.384-1.383a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1.06l-.22.22h.44v.007a3.996 3.996 0 0 1 3.98 4.405m4.667-2.3C20.277 7.15 17.01 4 13 4a7.49 7.49 0 0 0-6.64 4.018C6.24 8.011 6.122 8 6 8a6 6 0 0 0 0 12h13.5a4.5 4.5 0 0 0 .98-8.89" clipRule="evenodd"/>
  </svg>
));

IconCloudRefreshFill.displayName = "IconCloudRefreshFill";
