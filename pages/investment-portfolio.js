import { NextSeo } from "next-seo"
import Image from "next/image"

export default function InvestmentPortfolio() {
    return (
        <section className="container flex flex-col-reverse items-center gap-5 py-8 lg:flex-row lg:items-start lg:justify-between">
            <NextSeo
                title="PTS Holdings | Investment Portfolio"
                description="Discover our diverse investment portfolio and explore the innovative companies we have partnered with. Learn how we drive growth and create value for our clients."
            />
            <div className="space-y-4 text-center lg:w-1/2 lg:text-left">
                <h2 className="body-large-bold lg:header2 text-navy-basic">
                    Investment Portfolio{" "}
                </h2>
                <p
                    style={{
                        fontSize: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    We monitor the performance of the portfolio on a regular
                    basis and adjust investments as needed in order to maintain
                    desired profile. We regularly review our portfolio KPI
                    performance against predetermined benchmarks in order to
                    measure success and make adjustments as needed and utilize
                    financial planning tools to manage cash flow needs and
                    ensure that all financial goals are met in a timely manner.
                </p>
            </div>
            <div className="relative h-[280px] w-[346px] md:h-[500px] md:w-[508px]">
                <Image
                    src="/assets/pics/portfolio.svg"
                    layout="fill"
                    alt="PTS Portfolio"
                    fill
                />
            </div>
        </section>
    )
}
