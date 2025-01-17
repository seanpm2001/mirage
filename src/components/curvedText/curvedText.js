import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colorFromProp from 'utils/colors'

const Container = styled.div`
  margin-bottom: ${props => props.marginBottom};
  margin-left: auto;
  margin-right: auto;
  max-height: 200px;
  max-width: 950px;
  color: ${colorFromProp('color')};

  svg {
    display: block;
  }

  path {
    fill: transparent;
  }
  text {
    fill: currentColor;
    text-anchor: middle;
    letter-spacing: ${props => props.letterSpacing};
    line-height: normal;
    font-family: ${props => props.theme.fonts.headerFont};
    font-size: ${props => props.fontSize};
  }
`

const CurvedText = (props) => {
  const {
    text,
    ...rest
  } = props

  return (
    <Container {...rest} className='curved-text'>
      <svg viewBox='0 10 200 100'>
        <path id='curve' d='M0 80 Q100 -30, 200 80' />
        <text width='200'>
          <textPath xlinkHref='#curve' startOffset='50%'>
            {text}
          </textPath>
        </text>
      </svg>
    </Container>
  )
}

CurvedText.propTypes = {
  fontSize: PropTypes.string,
  letterSpacing: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  marginBottom: PropTypes.string
}

CurvedText.defaultProps = {
  fontSize: '1.6rem',
  letterSpacing: 'normal',
  color: 'textPrimary',
  marginBottom: '-100px'
}

/** @component */
export default CurvedText
