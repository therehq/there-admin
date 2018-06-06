import styled from 'styled-components'

import Link from 'next/link'
import NavItem from './NavItem'
import Home from '../../vectors/Home'
import Users from '../../vectors/Users'
import Activity from '../../vectors/Activity'

const Sidebar = () => (
  <Wrapper>
    <LogoWrapper>
      <ThereLogo src="/static/svg/thereLogo.svg" />
    </LogoWrapper>
    <UserProfile>
      <ProfileAvatar>
        <img src={avatarUrl} />
      </ProfileAvatar>
      <ProfileName>Mohammad</ProfileName>
    </UserProfile>
    <MenuContainer>
      <Link href="/users">
        <NavItem title="Dashboard">
          <Home />
        </NavItem>
      </Link>
      <Link href="/users">
        <NavItem title="Users" IsSelected>
          <Users />
        </NavItem>
      </Link>
      <NavItem href="#" title="Activity">
        <Activity />
      </NavItem>
    </MenuContainer>
  </Wrapper>
)
export default Sidebar

const avatarUrl =
  'https://scontent-lga3-1.cdninstagram.com/vp/463446431304dc69d691ea3a64a93215/5B8702D3/t51.2885-15/e35/32634238_2084785561797142_4761002665301770240_n.jpg'

const Wrapper = styled.div`
  width: auto;
`

const LogoWrapper = styled.div`
  margin-bottom: 15px;
  text-align: center;
`

const ThereLogo = styled.img`
  height: 26px;
`

const UserProfile = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`

const ProfileAvatar = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`

const ProfileName = styled.span`
  padding: 0px 5px;

  font-size: 14px;
  color: #828282;
`

const MenuContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`
