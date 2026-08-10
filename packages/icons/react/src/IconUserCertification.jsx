import * as React from "react";

export const IconUserCertification = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M9.957 4.5c1.654 0 3 1.346 3 3 0 1.655-1.346 3-3 3-1.655 0-3-1.345-3-3 0-1.654 1.345-3 3-3m0 7.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M22.64 9.784l-2.153.017-.65-2.053a.355.355 0 0 0-.677 0l-.65 2.053-2.152-.017a.355.355 0 0 0-.21.645l1.752 1.252-.681 2.042c-.11.33.269.604.548.398l1.732-1.278 1.732 1.278a.355.355 0 0 0 .548-.398l-.68-2.042 1.75-1.252a.355.355 0 0 0-.209-.645M1.005 20.174A7 7 0 0 1 7.957 14h4a7 7 0 0 1 6.951 6.174.75.75 0 0 1-.748.826.756.756 0 0 1-.744-.675 5.51 5.51 0 0 0-5.46-4.825h-4a5.51 5.51 0 0 0-5.458 4.826.75.75 0 1 1-1.492-.152" clipRule="evenodd"/>
  </svg>
));

IconUserCertification.displayName = "IconUserCertification";
