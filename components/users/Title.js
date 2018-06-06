import styled from 'styled-components'

const Title = () => (
  <Wrapper>
    <MainText>Today</MainText>
  </Wrapper>
)

export default Title

const Wrapper = styled.div`
  width: 100%;
  min-height: 66px;
  display: flex;
  align-items: center;
  padding-left: ${p => p.theme.innerPageSidePadding}px;
`

const MainText = styled.div`
  line-height: 18px;
  font-size: 20px;
  letter-spacing: 0.3px;

  color: #4f4f4f;
`
