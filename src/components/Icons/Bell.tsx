import * as React from 'react'

import { SVGProps } from './types'

export const Bell = ({ title, titleId, ...props }: SVGProps) => (
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
      d="M22 18a1 1 0 1 0 0-2v2ZM2 16a1 1 0 1 0 0 2v-2Zm11.73 5 .865.502A1 1 0 0 0 13.73 20v1Zm-3.46 0v-1a1 1 0 0 0-.865 1.502L10.27 21ZM22 16H2v2h20v-2ZM2 18a4 4 0 0 0 4-4H4a2 2 0 0 1-2 2v2Zm4-4V9H4v5h2Zm0-5a6 6 0 0 1 6-6V1a8 8 0 0 0-8 8h2Zm6-6a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2Zm6 6v5h2V9h-2Zm0 5a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2h-2Zm-5.135 6.498a1 1 0 0 1-.865.498v2a3 3 0 0 0 2.595-1.494l-1.73-1.004Zm-.865.498a1 1 0 0 1-.865-.498l-1.73 1.004A3 3 0 0 0 12 22.997v-2ZM10.27 22h3.46v-2h-3.46v2Z"
      fill="currentColor"
    />
  </svg>
)
