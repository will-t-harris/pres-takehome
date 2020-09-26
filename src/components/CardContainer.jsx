/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const containerStyles = css`
  min-width: 300px;
`

export const CardContainer = ({children}) => {
  return (
    <section css={containerStyles}>
      {children}
    </section>
  )
}