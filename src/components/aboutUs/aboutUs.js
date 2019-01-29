import React from 'react'
import styled from 'styled-components'

import {
  H1,
  H2,
  P,
  FlexRow,
  FlexCol
} from 'SRC'

import defaultProps from './defaultProps'

const BaseAboutUs = ({className, header, sections, footer, ...props}) => {
  return (<section className={className}>
    <FlexCol mobile={{width: 4}} desktop={{width: 8, span: 2}}>
      <H1>{header}</H1>
    </FlexCol>
    <FlexCol mobile={{width: 4}} desktop={{width: 10, span: 1}}>
      <div className={'flexDiv'}>
        {
          sections.map((section, i) => {
            return (
              <FlexCol mobile={{width: 4}} desktop={{width: 4}} key={`about-us-${i}`}>
                <div>
                  <H2>{section.title}</H2>
                  <P>{section.body}</P>
                </div>
              </FlexCol>
            )
          })
        }
      </div>
    </FlexCol>
    <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
      <H2>{footer}</H2>
    </FlexCol>
  </section>)
}

const AboutUs = styled(BaseAboutUs)`
  ${FlexRow}
  ${H1}, ${H2} {
    text-align: center;
    text-transform: uppercase;
  }
  ${H1} {
    margin: 0 auto;
    margin-bottom: 40px;
  }
  ${H2} {
    color: ${props => props.theme.colors.rocketBlue};
    margin-top: 20px;
    margin-bottom: 20px;
  }
  ${P} {
    text-align: center;
    line-height: 2;
  }
  .flexDiv {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 60px;
  }
`

AboutUs.defaultProps = {
  ...defaultProps,
  padding: true,
  constrained: true
}

/** @component */
export default AboutUs