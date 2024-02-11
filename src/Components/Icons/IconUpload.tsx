import type { SVGProps } from "react";

const SvgIconUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' {...props}>
    <g fill='none'>
      <path
        fill='currentColor'
        d='M44 24a2 2 0 1 0-4 0zM24 8a2 2 0 1 0 0-4zm15 32H9v4h30zM8 39V9H4v30zm32-15v15h4V24zM9 8h15V4H9zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1zM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={4}
        d='m6 35 10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5 4.773-4.773a2 2 0 0 1 2.615-.186L42 31m-5-13V6m-5 5 5-5 5 5'
      />
    </g>
  </svg>
);
export default SvgIconUpload;
