import Image from "next/image";
import { ImLinkedin } from "react-icons/im";

const PersonalCard = ({ img, name, title, company, linkedin }) => {
	return (
		<div className="w-fit text-center">
			<Image
				src={img}
				alt={`${name} img`}
				width={208}
				height={208}
				className="mb-6 rounded-lg"
			/>
			<p className="body-small-bold md:body-medium-bold mb-2 text-navy-basic">
				{name}
			</p>
			<p className="caption-regular mb-2">{title}</p>
			<p className="caption-regular mb-2">{company}</p>

			{linkedin && (
				<div className="mx-auto w-fit cursor-pointer">
					<a href={linkedin} target="_blank" rel="noreferrer">
						<Image
							src={"/assets/icons/linkedin-icon.svg"}
							alt={`${name} linkedin`}
							width={20}
							height={20}
						/>
					</a>
				</div>
			)}
		</div>
	);
};

export default PersonalCard;
