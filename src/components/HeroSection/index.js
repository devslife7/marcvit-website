import React, { useState } from "react"
import Video from "../../videos/video.mp4"
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
  LinkBtn,
} from "./HeroElements"

export default function HeroSection() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='Home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>We Help your Business </HeroH1>
        <HeroP>Services and web applications to help companies manage thier work and scale.</HeroP>
        <HeroBtnWrapper>
          <LinkBtn
            to='services'
            smooth='true'
            duration={500}
            spy={true}
            exact='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </LinkBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}
