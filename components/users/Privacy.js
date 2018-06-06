import styled, { css } from 'styled-components'

import HiddenIcon from '../../vectors/Hidden'
import LocationIcon from '../../vectors/Location'

export default ({ privateLocation }) =>
  privateLocation === false ? (
    <>
      <LocationIconWrapper>
        <HiddenIcon />
      </LocationIconWrapper>
      <PrivacyText light>Private Location</PrivacyText>
    </>
  ) : (
    <>
      <LocationIconWrapper>
        <LocationIcon />
      </LocationIconWrapper>
      <PrivacyText>Public Location</PrivacyText>
    </>
  )

const LocationIconWrapper = styled.span`
  vertical-align: middle;

  svg {
    display: inline-block;
  }
`

const PrivacyText = styled.span`
  margin-left: 7px;

  ${p =>
    p.light
      ? css`
          color: #aaa;
        `
      : ''};
`
