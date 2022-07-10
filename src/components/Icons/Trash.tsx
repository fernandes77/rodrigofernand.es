import * as React from 'react'

import { SVGProps } from './types'

export const Trash = ({ title, titleId, ...props }: SVGProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M3 6h18"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 6a1 1 0 1 0-2 0h2ZM6 6a1 1 0 0 0-2 0h2Zm1 0a1 1 0 0 0 2 0H7Zm8 0a1 1 0 1 0 2 0h-2Zm3 0v14h2V6h-2Zm0 14a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1H7v2h10v-2ZM7 21a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3v-2Zm-1-1V6H4v14h2ZM9 6V4H7v2h2Zm0-2a1 1 0 0 1 1-1V1a3 3 0 0 0-3 3h2Zm1-1h4V1h-4v2Zm4 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm1 1v2h2V4h-2Z"
      fill="currentColor"
    />
    <path
      d="M10 11v6M14 11v6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
