import Image from 'next/image'

const AboutUsSection = () => {
  return (
    <section className="s my-10 rounded-lg bg-white p-10 shadow-lg">
      <h1 className=" md:header3 body-medium-bold mb-6 text-center text-navy-basic">
        About us
      </h1>
      <div className="space-y-[40px]">
        <div className="flex flex-col-reverse items-center gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4 text-center lg:w-1/2 lg:text-left">
            <p className="body-small-regular md:body-medium-regular">
              <span className="font-extrabold text-navy-basic">S</span>
              ince our evolving on 2012, PTS investments holdings group has
              emerged as the premier provider of managed services, project
              management, technology solutions, & business venture builders to
              the investment management industry. PTS group of companies have
              been focusing to add a significant value to the global disruptive
              technological ecosystems & industry-wide platforms through
              developing and investing in the people
            </p>
          </div>
          <div className="relative h-[175px] w-[311px] md:h-[229px] md:w-[343px]">
            <Image
              src="/assets/pics/business-man-hand-on-upward-arrow.jpg"
              layout="fill"
              alt="typing on laptop"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative h-[175px] w-[311px] md:h-[229px] md:w-[343px]">
            <Image
              src="/assets/pics/businessmen-handshake.jpg"
              layout="fill"
              alt="touch analatics "
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="space-y-4 text-center lg:w-1/2 lg:text-left">
            <p className="body-small-regular md:body-medium-regular">
              <span className="font-extrabold text-navy-basic">W</span>e have
              adapted ecosystem-based approach enabling us to serve as a
              catalyst for our investment portfolios success. Tapping our deep
              industry knowledge of our diverse team members and our robust
              ecosystem of collaborative partners enabling us to provide a suite
              of tailored products and services for both our motivated
              entrepreneurs, governments, and investors to help businesses build
              resilience, spur innovation, expedite growth and expand into key
              markets.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4 text-center lg:w-1/2 lg:text-left">
            <p className="body-small-regular md:body-medium-regular">
              <span className="font-extrabold text-navy-basic">O</span>n 2021,
              we had a strategic direction to build and manage secure and
              valuable investment portfolios in the disruptive technologies
              across the globe aiming to ensure maximum benefits, fewer risks as
              well as seeding in the entrepreneurs over the globe.
            </p>
          </div>
          <div className="relative h-[175px] w-[311px] md:h-[229px] md:w-[343px]">
            <Image
              src="/assets/pics/reviewing-numbers-and-charts.jpg"
              layout="fill"
              alt="signing on tablet"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
