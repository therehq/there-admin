import styled, { css } from 'styled-components'

const SpaceCell = styled.td`
  width: ${p => p.theme.innerPageSidePadding}px;

  border-bottom: ${p => (p.noBorder ? 'none' : '1px solid #f2f2f2')};
`
export default SpaceCell
