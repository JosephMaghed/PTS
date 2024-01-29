import PersonalCard from "components/PersonCard";
import { peopleData } from "data/peopleData";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useState, useEffect } from "react";

// NumberCounter component
const NumberCounter = ({ value, label, max, labelNo }) => {
	const [count, setCount] = useState(0);
	const tick = 250.0 / max; // Adjust as needed

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount((prevCount) => (prevCount < max ? prevCount + 1 : prevCount));
		}, tick); // Adjust the interval duration dynamically based on max

		return () => clearInterval(intervalId);
	}, [max, tick]);
	return (
		<div className="w-1/2">
			<p className="text-4xl font-extrabold text-red-basic">
				{count}
				{labelNo}
			</p>
			<p className="text-lg font-bold text-navy-basic md:text-xl">{label}</p>
		</div>
	);
};

export default function Team() {
	return (
		<div className="container pt-10">
			<NextSeo
				title="PTS Holdings | Team"
				description="Discover our experienced management team at PTS Investments Holdings, providing strategic advice and extensive networks to clients in Egypt and the MEA region."
			/>

			<h1 className="body-medium-bold lg:header3 mb-6 text-center text-navy-basic md:text-left">
				Management Team
			</h1>
			<br />

			<p>
				PTS Investment Holdings was established by a group of Investors, Private
				equity Telco&apos;s, Startups, & financial institutions.
			</p>
			<br />
			<p>
				At PTS Investment Holdings, our success is driven by the expertise and
				dedication of our management team. With a diverse group of seasoned
				professionals who strive to provide unparalleled financial services and
				investment solutions to our valued clients.
			</p>

			<div className=" mt-5 flex flex-col gap-5">
				<div className="flex flex-col items-center gap-7 md:flex-row">
					<NumberCounter
						value={50}
						label="Accumulative years of experience+"
						max={50}
						labelNo={"+"}
					/>

					<NumberCounter
						value={250}
						label="Deals & Mandates worked on since 2007"
						max={250}
						labelNo={"+"}
					/>
				</div>

				<div className="flex flex-col items-center gap-7 md:flex-row">
					<NumberCounter
						value={150}
						label="USD was raised in transactions closed"
						max={150}
						labelNo={"+ M"}
					/>
					<NumberCounter
						value={250}
						label="Countries where our mandates and portfolio are located"
						max={10}
					/>
				</div>
			</div>

			<div className="relative mt-6 overflow-hidden rounded-2xl">
				<Image
					src="/assets/pics/team.jpg"
					alt="PTS Management Team"
					width={1920}
					height={1080}
					style={{ objectFit: "contain" }}
				/>
			</div>

			{/* <div className="flex flex-col flex-wrap items-center justify-center gap-10 md:flex-row">
        {peopleData.map((person) => (
          <PersonalCard key={person.name} {...person} />
        ))}
      </div> */}
		</div>
	);
}
