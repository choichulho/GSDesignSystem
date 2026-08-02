import * as React from "react";

export const IconCertification = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M5 21.5A1.5 1.5 0 0 1 3.5 20V5A1.5 1.5 0 0 1 5 3.5h10A1.5 1.5 0 0 1 16.5 5v2.25a.75.75 0 0 0 1.5 0V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h6.25a.75.75 0 0 0 0-1.5zm1.75-15h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5m0 3.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5m9.907.555a1 1 0 0 1 .686 0l4 1.46a1 1 0 0 1 .657.939v5.309a3 3 0 0 1-1.336 2.496l-3.11 2.073a1 1 0 0 1-1.108 0l-3.11-2.073A3 3 0 0 1 12 18.263v-5.31a1 1 0 0 1 .657-.939zm3.843 2.749L17 12.027l-3.5 1.277v4.959c0 .503.25.97.668 1.248L17 21.399l2.832-1.888c.418-.278.668-.745.668-1.248z" clipRule="evenodd"/>
  </svg>
));

IconCertification.displayName = "IconCertification";
