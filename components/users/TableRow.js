import styled, { css } from 'styled-components'

import SpaceCell from '../shared/SpaceCell'
import Privacy from './Privacy'
import User from '../../vectors/User'

const TableRow = ({
  userId = '',
  avatarUrl,
  name = 'no name',
  location = 'Tehran, Iran Islamic Rep',
  countryFlagEmoji = '🇮🇷',
  twitterHandle = '@morajabi',
  email = '',
  privateLocation = false,
  joinedDate = '',
}) => (
  <Wrapper>
    <SpaceCell />
    <Cell>
      <Profile>
        <Avatar>
          {avatarUrl ? <AvatarImage src={avatarUrl} /> : <User />}
        </Avatar>
        <ProfileDetails>
          <Name>{name}</Name>
          <Location>
            {countryFlagEmoji} {location}
          </Location>
        </ProfileDetails>
      </Profile>
    </Cell>
    <Cell>@{twitterHandle}</Cell>
    <Cell>{email}</Cell>
    <Cell>
      <Privacy privateLocation={privateLocation} />
    </Cell>
    <Cell>
      <CopyUserId userId={userId} onClick={() => copyToClipboard(userId)}>
        Copy User Id
      </CopyUserId>
    </Cell>
    <Cell>
      <JoinedDate>Joined {joinedDate}</JoinedDate>
    </Cell>
  </Wrapper>
)

const copyToClipboard = str => {
  const el = document.createElement('textarea')
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

export default TableRow

const Wrapper = styled.tr`
  transition: background 200ms;

  &:hover {
    background: #eee;
  }
`

const Cell = styled.td`
  font-size: 13px;
  letter-spacing: 0.3px;

  color: #4f4f4f;

  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f2f2f2;
`

//profile cell
const Profile = styled.div`
  display: flex;
  align-items: center;
`

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border-radius: 50%;
  background: linear-gradient(49.57deg, #cff3fe 13.03%, #c7fcff 82.92%);
`
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
`

const ProfileDetails = styled.div`
  flex-grow: 1;
  margin-left: 12px;
`

const Name = styled.h3`
  margin: 0;
  line-height: 14px;
  font-size: 14px;
  letter-spacing: 0.3px;

  color: #4f4f4f;
`

const Location = styled.span`
  line-height: 12px;
  font-size: 12px;
  letter-spacing: 0.3px;

  color: #828282;
`
const CopyUserId = styled.button`
  margin: 0;
  padding: 0;
  display: black;
  border: none;
  background: none;

  font-size: 13px;
  letter-spacing: 0.3px;
  color: #2d9cdb;
  cursor: pointer;

  &:focus {
    outline: none;
    transform: scale(0.9, 0.9);
  }
`
const JoinedDate = styled.span`
  font-size: 13px;
  letter-spacing: 0.3px;

  color: #bdbdbd;
`
