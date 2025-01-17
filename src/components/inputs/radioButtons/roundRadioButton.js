import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const BaseRoundRadioButton = ({children, className, input, ...props}) => {
  return (
    <div className={className}>
      <input id={input.value} type='radio' {...input} />
      <label htmlFor={input.value}>
        {children}
      </label>
    </div>
  )
}

const checked = css`
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.rocketBlue};
  background-color: ${props => props.theme.colors.rocketBlue};
`

const RoundRadioButton = styled(BaseRoundRadioButton)`
  position: relative;
  > input {
    position: absolute;

    width: 0;
    height: 0;

    opacity: 0;
  }
  > label {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 6.4rem;
    height: 6.4rem;

    cursor: pointer;
    transition-timing-function: ease-in-out;
    transition-duration: 0.25s;
    transition-property: background-color, border-color, color;
    text-align: center;
    letter-spacing: normal;

    color: ${props => props.theme.colors.textPrimary};
    border: 1px solid ${props => props.theme.colors.gray[5]};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.gray[0]};

    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 1.6rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
  }

  > input:checked + label {
    ${props => checked}
  }
`

RoundRadioButton.propTypes = {
  children: PropTypes.node,
  input: PropTypes.object,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string.isRequired
    }),
    colors: PropTypes.shape({
      textPrimary: PropTypes.string.isRequired,
      rocketBlue: PropTypes.string.isRequired,
      white: PropTypes.string.isRequired,
      gray: PropTypes.array.isRequired
    })
  })
}

/** @component */
export default RoundRadioButton
export { BaseRoundRadioButton, checked }
