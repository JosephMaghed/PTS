import { ValueCard } from "./ValueCard"

export const ValuesSection = () => {
    // validate email with regex pattern and comment each line

    return (
        <section>
            <h2 className="md:header3 body-medium-bold mb-6 text-center text-navy-basic">
                Corporate Values
            </h2>
            <div className="grid grid-cols-1  justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
                <ValueCard
                    img={"/assets/pics/person-using-tablet.png"}
                    title={"Start your business up"}
                    description={
                        "Our system of rules, practices, and processes in the company help ensure we continue to success by promoting accountability and taking responsibility for our actions "
                    }
                />

                <ValueCard
                    img={
                        "/assets/pics/man-giving-business-presentation-using-high-technology-digital-pen.png"
                    }
                    title={"We evolve with you, not away from you"}
                    description={
                        " We are flexible, understanding that business conditions change, same as goals and technology, We continuously seek ways to develop and improve ourselves"
                    }
                />
                <ValueCard
                    img={
                        "/assets/pics/two-business-man-shaking-hands-during-meeting.png"
                    }
                    title={"Compete externally, collaborate internally"}
                    description={
                        "We are building and facilitating internal collaboration within and across interdisciplinary work teams in order to maximize one’s external competitive strength."
                    }
                />
                <ValueCard
                    img={"/assets/pics/business-people-with-startup-rocket.png"}
                    title={"You are unique just like everyone else"}
                    description={
                        "We are committed to diversity, equity and life challenging creating an environment that is inclusive for all of our team and customers in the same time."
                    }
                />
            </div>
        </section>
    )
}
