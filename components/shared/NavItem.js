import styled, { css } from 'styled-components'

const NavItem = ({ title, IsSelected, ...props }) => (
  <Wrapper href="#" selected={IsSelected} {...props}>
    {props.children}
    <Title selected={IsSelected}>{title}</Title>
  </Wrapper>
)

export default NavItem

const Wrapper = styled.a`
  height: 26px;
  display: flex;
  padding: 0px 8px;
  margin-bottom: 6px;

  text-decoration: none;
  background: rgba(100, 100, 100, 0);
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  transition: background 200ms, color 200ms;

  ${p =>
    p.selected
      ? css`
          background: #59b9ff;
          color: #fff;

          img {
            color: #fff;
          }
        `
      : css`
          &:hover {
            background: rgba(200, 200, 200, 0.3);
          }
        `};
`

const Title = styled.span`
  margin-left: 10px;

  font-size: 14px;
  letter-spacing: 0.3px;

  ${p =>
    p.selected
      ? css`
          color: white;
        `
      : css`
          color: #828282;
        `};
`
