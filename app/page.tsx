import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { WhyConvergex } from "./components/WhyConvergex"
import { TechStack } from "./components/TechStack"
import { Testimonials } from "./components/Testimonials"
import { WhatWeOffer } from "./components/WhatWeOffer"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhatWeOffer />
      <WhyConvergex />
      <TechStack />
      <Testimonials />
    </>
  )
}
