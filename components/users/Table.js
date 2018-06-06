import styled, { css } from 'styled-components'

import TableRow from './TableRow'
import SpaceCell from '../shared/SpaceCell'

const Table = () => (
  <Wrapper>
    <TableMain width="100%">
      <thead>
        <tr>
          <SpaceCell noBorder />
          <HeaderCell>Profile</HeaderCell>
          <HeaderCell>Twitter</HeaderCell>
          <HeaderCell>Email</HeaderCell>
          <HeaderCell>Privacy</HeaderCell>
          <HeaderCell />
          <HeaderCell />
        </tr>
      </thead>
      <tbody>
        <TableRow
          key="1"
          userId="123-123-123"
          avatarUrl="https://scontent-lga3-1.cdninstagram.com/vp/463446431304dc69d691ea3a64a93215/5B8702D3/t51.2885-15/e35/32634238_2084785561797142_4761002665301770240_n.jpg"
          name="Guilermo Raugh"
          location="San fransico, USA"
          countryFlagEmoji="🇺🇸"
          twitterHandle="rough"
          email="gr@zeit.co"
          privateLocation={false}
          joinedDate="2 days ago"
        />
        <TableRow
          key="2"
          userId="123-123-321"
          avatarUrl="https://scontent-lga3-1.cdninstagram.com/vp/463446431304dc69d691ea3a64a93215/5B8702D3/t51.2885-15/e35/32634238_2084785561797142_4761002665301770240_n.jpg"
          name="Mohammad Rajabifard"
          location="San fransico, USA"
          countryFlagEmoji="🇺🇸"
          twitterHandle="rough"
          email="gr@zeit.co"
          privateLocation={true}
          joinedDate="2 days ago"
        />
        <TableRow
          key="3"
          userId="123-123-444"
          avatarUrl="https://scontent-lga3-1.cdninstagram.com/vp/463446431304dc69d691ea3a64a93215/5B8702D3/t51.2885-15/e35/32634238_2084785561797142_4761002665301770240_n.jpg"
          name="Mohammad Rajabifard"
          location="San fransico, USA"
          countryFlagEmoji="🇺🇸"
          twitterHandle="rough"
          email="gr@zeit.co"
          privateLocation={false}
          joinedDate="2 days ago"
        />
      </tbody>
    </TableMain>
  </Wrapper>
)

export default Table

const Wrapper = styled.div`
  padding-top: 36px;
  padding-bottom: 72px;
`

const TableMain = styled.table`
  border-collapse: collapse;
  color: #4f4f4f;
`

const HeaderCell = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f2f2f2;

  line-height: 12px;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.3px;

  color: #4f4f4f;
`
