import * as React from "react";

export const IconVideo = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M21.5 16.515 17 12.739v-1.566l4.5-3.775zm-6-6.041V16.5c0 .827-.673 1.5-1.5 1.5H4c-.827 0-1.5-.673-1.5-1.5v-9C2.5 6.673 3.173 6 4 6h10c.827 0 1.5.673 1.5 1.5zm5.992-4.58c-.329 0-.665.11-.956.354L17 9.215V7.5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.803l3.536 2.967c.29.244.627.354.956.354.774 0 1.508-.609 1.508-1.503V7.397c0-.894-.733-1.503-1.508-1.503" clipRule="evenodd"/>
  </svg>
));

IconVideo.displayName = "IconVideo";
