const { default: Image } = require('next/image')

const StrategySection = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-5 lg:flex-row lg:items-start lg:justify-between">
      <div className="space-y-4 text-center lg:w-1/2 lg:text-left">
        <h2 className="body-medium-bold md:header3 text-navy-basic">
          Our Strategy
        </h2>
        <p className="body-small-regular md:body-medium-regular">
          Our main strategy is based on seeding on People and Technology,
          connecting innovative and tech-savvy challengers across
          multi-industry-wide platforms through cross boarder network. We aim to
          create homogenous ecosystem with robust investment backbone ensuring
          high profits with minimum risks
        </p>
      </div>
      <div className="relative h-[180px] w-[246px] md:h-[240px] md:w-[414px]">
        <Image
          src="/assets/pics/chessboard.jpg"
          layout="fill"
          alt="Chessboard"
          fill
        />
      </div>
    </section>
  )
}

export default StrategySection
