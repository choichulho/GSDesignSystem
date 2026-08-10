import * as React from "react";

export const IconBenefitsDoneFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M21.62 9.875 20.305 8.56V6.7a3 3 0 0 0-.53-1.7A3 3 0 0 0 17.3 3.7h-1.86l-1.315-1.315a3.007 3.007 0 0 0-4.25 0L8.56 3.7H6.7c-.87 0-1.65.37-2.2.96a3 3 0 0 0-.805 2.045v1.86L2.38 9.88A3 3 0 0 0 1.5 12c0 .77.29 1.54.88 2.125l1.315 1.315v1.86a3 3 0 0 0 3 3h1.86l1.315 1.315a3.007 3.007 0 0 0 4.25 0l1.315-1.315h1.86c.79 0 1.51-.305 2.045-.805.585-.55.955-1.33.955-2.195v-1.86l1.315-1.315a3 3 0 0 0 0-4.245zm-4.375-.47L10.99 15.66a.74.74 0 0 1-.585.21.74.74 0 0 1-.585-.21l-3.075-3.075a.745.745 0 0 1 0-1.06.745.745 0 0 1 1.06 0l2.6 2.6L16.18 8.35a.745.745 0 0 1 1.06 0 .745.745 0 0 1 0 1.06z"/>
  </svg>
));

IconBenefitsDoneFill.displayName = "IconBenefitsDoneFill";
