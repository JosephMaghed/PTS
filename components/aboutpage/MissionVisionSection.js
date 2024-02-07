import HorizontalCardWithImage from 'components/cards/HorizontalCardWithImage'

const MissionVisionSection = () => {
  return (
    <section className="pb-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <HorizontalCardWithImage
          title={'Our Vision'}
          description="Our vision to to be a gamechanger to the global entrepreneurial ecosystems through developing and investing in the people and technology .
          "
          img="/assets/pics/vision.jpg"
          imgAlt="retinal biometrics technology with man eye digital remix"
        />
        <HorizontalCardWithImage
          title={'Our Mission'}
          description="To maintain our recognizable identity and promote our cross-boarders ecosystem platforms. Our clients, both from entrepreneurs, governments and investors, will seek us in order to achieve and transcend their aspirations.          "
          img="/assets/pics/mission.jpg"
          imgAlt="group diverse people with joining hands teamwork"
        />
      </div>
    </section>
  )
}

export default MissionVisionSection
