import Image from "next/image";
const HorizontalCardWithImage = ({ title, img, description, imgAlt }) => {
	return (
		<div className="flex flex-col rounded-xl px-[37px] py-[40px] text-center shadow-lg lg:text-left lg:shadow-2xl">
			<h2 className="body-medium-bold md:header3 mb-6 capitalize text-navy-basic">
				{title}
			</h2>
			<div className="flex flex-col items-center justify-center lg:flex-row  lg:items-start">
				<p className="body-small-regular md:body-medium-regular mr-4 mb-6 lg:w-1/2">
					{description}
				</p>
				<div className="relative h-[178px] w-[244px] overflow-hidden rounded">
					<Image src={img} layout="fill" alt={imgAlt} fill />
				</div>
			</div>
		</div>
	);
};
export default HorizontalCardWithImage;
