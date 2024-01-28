import type { SVGProps } from "react";

const SvgIconBold = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <path
      fill='currentColor'
      d='M8.915 18.25q-.44 0-.739-.299-.3-.3-.3-.74V6.789q0-.44.3-.739.299-.299.74-.299h3.159q1.433 0 2.529.904T15.7 9.006q0 .967-.508 1.693-.507.726-1.257 1.064.913.256 1.55 1.074.638.817.638 1.97 0 1.61-1.202 2.527-1.202.916-2.646.916zm.237-1.185h3.061q1.162 0 1.876-.699.715-.699.715-1.628t-.715-1.627q-.714-.7-1.893-.7H9.152zm0-5.815h2.863q.998 0 1.69-.617.693-.618.693-1.546 0-.947-.704-1.552t-1.667-.606H9.152z'
    />
  </svg>
);
export default SvgIconBold;
