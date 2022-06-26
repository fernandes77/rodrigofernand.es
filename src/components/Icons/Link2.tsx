import * as React from 'react'

import { SVGProps } from './types'

export const Link2 = ({ title, titleId, ...props }: SVGProps) => (
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
      d="M15 6a1 1 0 1 0 0 2V6Zm3 1V6v1Zm-3 9a1 1 0 1 0 0 2v-2Zm-6 2a1 1 0 1 0 0-2v2ZM9 8a1 1 0 1 0 0-2v2Zm6 0h3V6h-3v2Zm3 0a4 4 0 0 1 2.828 1.172l1.415-1.415A6 6 0 0 0 18 6v2Zm2.828 1.172A4 4 0 0 1 22 12h2a6 6 0 0 0-1.757-4.243l-1.415 1.415ZM22 12a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6h-2Zm-4 4h-3v2h3v-2Zm-9 0H6v2h3v-2Zm-3 0a4 4 0 0 1-2.828-1.172l-1.415 1.415A6 6 0 0 0 6 18v-2Zm-2.828-1.172A4 4 0 0 1 2 12H0a6 6 0 0 0 1.757 4.243l1.415-1.415ZM2 12a4 4 0 0 1 4-4V6a6 6 0 0 0-6 6h2Zm4-4h3V6H6v2Z"
      fill="currentColor"
    />
    <path
      d="M8 12h8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
