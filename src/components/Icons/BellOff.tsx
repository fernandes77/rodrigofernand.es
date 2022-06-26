import * as React from 'react'

import { SVGProps } from './types'

const SvgBellOff = ({ title, titleId, ...props }: SVGProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M8.069 2.03a1 1 0 1 0 .982 1.74L8.07 2.03ZM19 9h-1 1Zm-1 4a1 1 0 1 0 2 0h-2Zm-1 5a1 1 0 1 0 0-2v2ZM2 16a1 1 0 1 0 0 2v-2Zm3-7h1v-.001L5 9Zm1.669-2.761A1 1 0 0 0 4.89 5.32l1.778.918Zm7.926 15.263a1 1 0 1 0-1.73-1.004l1.73 1.004Zm-3.46-1.004a1 1 0 0 0-1.73 1.004l1.73-1.004ZM9.051 3.771a6 6 0 0 1 5.976.045l1.009-1.727a8 8 0 0 0-7.967-.06l.982 1.742Zm5.976.045A6 6 0 0 1 18 8.999L20 9a8 8 0 0 0-3.964-6.91l-1.01 1.726ZM18 9v4h2V9h-2Zm-1 7H2v2h15v-2ZM2 18a4 4 0 0 0 4-4H4a2 2 0 0 1-2 2v2Zm4-4V9H4v5h2Zm0-5.001a6 6 0 0 1 .669-2.76L4.89 5.32A8 8 0 0 0 4 9.001L6 9Zm6.865 11.5a1 1 0 0 1-.865.497v2a3 3 0 0 0 2.595-1.494l-1.73-1.004Zm-.865.497a1 1 0 0 1-.865-.498l-1.73 1.004A3 3 0 0 0 12 22.996v-2Z"
      fill="currentColor"
    />
    <path
      d="m1 1 22 22"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgBellOff
