import Image from "next/image";

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
					PTS is a leading Investment firm that provides clients and
					partners with strategic advice within several structural and
					operational domains. We leverage our Executive Partners’
					extensive experience and network in the region to help our
					clients conduct business in Egypt, the MEA Region
				</p>
			</div>
		</section>
	);
};

export default WhoWeAreSection;
