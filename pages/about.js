import AboutUsSection from 'components/aboutpage/AboutUsSection'
import MissionVisionSection from 'components/aboutpage/MissionVisionSection'
import ValuesSection from 'components/aboutpage/ValuesSection'
import { NextSeo } from 'next-seo'

export default function About() {
  return (
    <div className="container space-y-[100px] overflow-hidden">
      <NextSeo
        title="PTS Holdings | About Us"
        description="Discover the story behind PTS, a leading investment firm in the Middle East and Africa. Learn about our history, mission, and commitment to excellence."
      />
      <AboutUsSection />
      <ValuesSection />
      <MissionVisionSection />
    </div>
  )
}
