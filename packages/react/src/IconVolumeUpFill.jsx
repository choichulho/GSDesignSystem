import * as React from "react";

export const IconVolumeUpFill = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m7 7.5 5.818-5.43c.639-.596 1.682-.143 1.682.732v18.397c0 .875-1.043 1.328-1.682.731L7 16.5H3.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm13.924-.761a.75.75 0 0 0-1.108-.155l-.003.002a.74.74 0 0 0-.146.978A7.94 7.94 0 0 1 21 11.969a7.94 7.94 0 0 1-1.369 4.463.74.74 0 0 0 .143.983l.003.002a.75.75 0 0 0 1.105-.15 9.45 9.45 0 0 0 1.618-5.298c0-1.934-.582-3.73-1.576-5.23m-4.03 1.918-.026.021c-.294.246-.326.67-.105.982.464.653.737 1.45.737 2.31 0 .887-.29 1.705-.782 2.369a.74.74 0 0 0 .131 1.003l.003.002c.325.273.822.23 1.074-.111A5.47 5.47 0 0 0 19 11.97a5.46 5.46 0 0 0-1.028-3.195c-.25-.348-.751-.393-1.079-.118" clipRule="evenodd"/>
  </svg>
));

IconVolumeUpFill.displayName = "IconVolumeUpFill";
