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
        <p className="body-small-regular md:body-medium-regular">
        PTS Investments Holdings is as an entrepreneurial venture builder corporate that invests through its provision of enterprise development services (EDS) and early-stage smart capital to develop innovative solutions, build future-ready companies, and create a complete ecosystem of competences, relationships, and know-how mainly in the development business sectors that create sustainable impact focusing on The Sustainable Development Goals (SDGs).  PTS Investments Holdings vision to be a game changer to the global entrepreneurial ecosystems through developing and investing in the people and technology.

PTS Projects (“The Founder of PTS Investments Holdings”) led by Abd El Aziz Mandour, is a Business Focused Project Management company that focus mainly on initiating, developing, and managing potential business ventures/projects within PTS Holdings acting as the operating vehicle adequate for the portfolio companies of PTS investments Holdings.

Since our evolving on 2012, Tapping our deep experience, we have emerged as EPC provider in the energy and technology industry sectors e.g. managed services, project management, technology solutions, and business venture builders to the investment management industry. 

On 2021, we had a strategic direction to expand globally through building business ventures and managing valuable investment portfolios across the globe aiming to ensure maximum benefits, fewer risks as well as seeding in the entrepreneurs over the globe.

With a main strategy based on seeding on People and Technology, connecting innovative and tech-savvy challengers across multi-industry-wide platforms through cross boarder network creating homogenous ecosystem with robust investment backbone ensuring high profits with minimum risks. We build our portfolio companies either by establishing new business ventures or by targeting small and medium sized companies that are led by strong entrepreneurs ready to reach the next level.

we have adapt ecosystem-based approach enabling us to provide a suite of tailored products and services for both our motivated entrepreneurs, governments and investors, and to serve as a catalyst for our investment portfolios success providing them a professional framework in which to grow together, and building them up in a targeted way Tapping our deep industry knowledge of our diverse team members and our robust ecosystem of collaborative partners while operating independently and can thus hold onto their success factors, such as their specific corporate culture, brand, and management and support the businesses build resilience, spur innovation, expedite growth and expand into key markets.

        </p>
      </div>
    </section>
  )
}

export default WhoWeAreSection
