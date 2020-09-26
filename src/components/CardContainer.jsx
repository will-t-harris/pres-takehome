/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import {MOBILE} from '../shared/breakpoints'

const containerStyles = css`
  ${MOBILE} {
    flex-direction: column;
  }
  display: flex;
  margin: 0 auto;
`

export const CardContainer = ({children}) => {
  return (
    <section css={containerStyles}>
      {children}
    </section>
  )
}