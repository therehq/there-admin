import styled from 'styled-components'

const Title = () => (
  <Wrapper>
    <SearchBox
      type="text"
      placeholder="Search by names, handles, or email...."
    />
  </Wrapper>
)

export default Title

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: ${p => p.theme.innerPageSidePadding}px;
  background: #fafafa;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
`

const SearchBox = styled.input`
  width: 316px;
  height: 30px;
  padding: 8px 12px 8px 12px;

  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`
