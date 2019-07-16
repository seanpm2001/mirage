import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from 'SRC/core/theme'

import { MirageMarkdown, H1 } from 'SRC'
import BaseContentfulTout from './contentfulTout.base'

const setBackgroundColor = ({fields: {
  backgroundColor = '#FFFFFF',
  backgroundTransparency = '0.0'
}}) => {
  var c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(backgroundColor)) {
    c = backgroundColor.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${backgroundTransparency})`
  }
  throw new Error('Bad Hex')
}

const textPosition = ({fields: { position = 'center' } }) => {
  const POSITIONS = {
    center: css`
      justify-content: center;
      align-content: center;
    `,
    centerTop: css`
      justify-content: center;
      align-content: flex-start;
    `,
    centerBottom: css`
      justify-content: center;
      align-content: flex-end;
    `,
    centerLeft: css`
      justify-content: center;
      align-content: flex-start;
    `,
    centerRight: css`
      justify-content: center;
      align-content: flex-end;
    `,
    topLeft: css`
      justify-content: flex-start;
      align-content: flex-start;
    `,
    topRight: css`
      justify-content: flex-start;
      align-content: flex-end;
    `,
    bottomLeft: css`
      justify-content: flex-end;
      align-content: flex-start;
    `,
    bottomRight: css`
      justify-content: flex-end;
      align-content: flex-end;
    `
  }
  return POSITIONS[position]
}

const ContentfulTout = styled(BaseContentfulTout)`
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 4rem;
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    margin-bottom: 6rem;
  `}
  ${props => props.fields.hero && props.theme.breakpointsVerbose.belowTablet`
    padding-bottom: 6rem;
  `}
  .roa-tout-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: ${props => setBackgroundColor(props)};
    ${props => textPosition(props)}
  }
  ${MirageMarkdown} {
    > * {
      color: ${props => props.fields.textColor ? props.fields.textColor : props.defaultColor};
    }
  }

  ${H1} {
    ${props => props.fields.hero && css`
      color: ${props => props.fields.textColor ? props.fields.textColor : props.defaultColor};
      font-size: 3.6rem;
      font-weight: 100;
      margin: 0;
      ${props.theme.breakpointsVerbose.aboveTablet`
        font-size: 8.2rem;
      `}
    `}
  }

  .roa-tout-buttons {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    top: 100%;
    position: absolute;
    ${props => props.fields.hero && props.theme.breakpointsVerbose.belowTablet`
      top: calc(100% - 2rem);
    `}
    ${props => props.fields.hero && props.theme.breakpointsVerbose.aboveTablet`
      position: relative;
      margin-top: 4rem;
    `}
    ${props => props.theme.breakpointsVerbose.abovePhoneMax`
      justify-content: center;
      flex-direction: row;
    `}
  }
`

ContentfulTout.propTypes = {
  className: PropTypes.string,
  defaultColor: PropTypes.string,
  fields: PropTypes.shape({
    backgroundColor: PropTypes.string,
    backgroundTransparency: PropTypes.number,
    description: PropTypes.string,
    media: PropTypes.object,
    position: PropTypes.string,
    textColor: PropTypes.string,
  })
}

ContentfulTout.defaultProps = {
  defaultColor: theme.colors.navy
}

/** @component */
export default ContentfulTout
export { setBackgroundColor }