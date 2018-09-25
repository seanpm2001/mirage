import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLink from './Link.base'

const NavyLink = styled(BaseLink)`
  color:  ${props => props.theme.colors.navy};
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.navy};
  }
`

NavyLink.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  }).isRequired
}

/** @component */
export default NavyLink