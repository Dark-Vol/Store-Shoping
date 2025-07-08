import React from "react";

const VolumeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="11 5 6 9H2v6h4l5 4V5z"/>
    <path d="M19 12c0-1.77-.77-3.29-2-4.29M19 12c0 1.77-.77 3.29-2 4.29M19 12h0"/>
  </svg>
);

export default VolumeIcon;
