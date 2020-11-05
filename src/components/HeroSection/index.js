import React from "react"
import Video from "../../videos/video.mp4"
import { HeroBg, HeroContainer, VideoBg } from "./HeroElements"

export default function HeroSection() {
  return (
    <HeroContainer id='Home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
    </HeroContainer>
  )
}
