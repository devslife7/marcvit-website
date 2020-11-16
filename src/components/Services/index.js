import React from "react"
import Icon1 from "../../images/website.svg"
import Icon2 from "../../images/piggybank.svg"
import Icon3 from "../../images/report.svg"

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements"

export default function Services() {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Website Building</ServicesH2>
          <ServicesP>Develop your web presence and make your business goals a reality.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Custom Application Development</ServicesH2>
          <ServicesP>We build custom applications that meet your unique needs.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Information Technology Solutions</ServicesH2>
          <ServicesP>We manage your IT, so you can manage your business.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
