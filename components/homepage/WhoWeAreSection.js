import Image from 'next/image'

const WhoWeAreSection = () => {
  return (
    <section className="flex flex-col items-center gap-5 lg:flex-row lg:items-start lg:justify-between">
      <div className="relative h-[180px] w-[246px] md:h-[240px] md:w-[414px]">
        <Image
          src="/assets/pics/business-meeting.webp"
          layout="fill"
          alt="business meeting"
          fill
        />
      </div>
      <div className="space-y-4 text-center lg:w-1/2 lg:text-left">
        <h2 className="body-medium-bold md:header3 text-navy-basic">
          Who We Are?
        </h2>
        <p className="body-medium-regular md:body-medium-regular">
          PTS is as an entrepreneurial venture builder corporate that invests
          through early-stage smart capital and its provision of ventures
          development services (VDS) to develop innovative solutions, build
          future-ready companies, and create a complete ecosystem of
          competences, relationships, and know-how mainly in the development
          business sectors that create sustainable impact focusing on The
          Sustainable Development Goals (SDGs). We have been focusing to add a
          significant value to the global disrupted technological ecosystems and
          industrywide platforms through developing and investing in the people
          and technology.
          <br />
          <br />
          PTS Projects (“The Founder of PTS Investments Holdings”) led by Abd El
          Aziz Mandour, is a Business Focused Project Management company that
          focus mainly on initiating, developing, and managing potential
          business ventures/projects within PTS Holdings acting as the operating
          vehicle adequate for the portfolio companies of PTS investments
          Holdings.
          <br />
          <br />
          Since our evolving on 2012, Tapping our deep experience, we have
          emerged as EPC provider in the energy and technology industry sectors
          e.g. managed services, project management, and technology solutions to
          the business venture builders, and investment management industry. On
          2021, we had a strategic direction to expand globally through building
          business ventures and managing valuable investment portfolios across
          the globe aiming to ensure maximum benefits, fewer risks as well as
          seeding in the entrepreneurs over the globe.
        </p>
      </div>
    </section>
  )
}

export default WhoWeAreSection
