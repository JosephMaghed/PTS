import HorizontalCardWithImage from "components/cards/HorizontalCardWithImage";

const MissionVisionSection = () => {
	return (
		<section className="pb-16">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<HorizontalCardWithImage
					title={"Our Vision"}
					description="To be recognized as a direct value added team within the investment value chain for the customers we serve.We strive to provide our clients with the best possible service"
					img="/assets/pics/retinal-biometrics-technology-with-man-s-eye-digital-remix.jpg"
					imgAlt="retinal biometrics technology with man eye digital remix"
				/>
				<HorizontalCardWithImage
					title={"Our Mission"}
					description="To maintain our recognizable identity and promote our cross-boarders ecosystem platforms. Our clients, both from entrepreneurs, governments and angel investors"
					img="/assets/pics/group-diverse-people-with-joining-hands-teamwork.jpg"
					imgAlt="group diverse people with joining hands teamwork"
				/>
			</div>
		</section>
	);
};

export default MissionVisionSection;
