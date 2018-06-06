import styled from 'styled-components'

const PageCountainer = ({ content, ...props }) => (
  <Container {...props}>{props.children}</Container>
)

export default PageCountainer

const Container = styled.div`
  width: 100%;
  min-height: 100px;

  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
`
