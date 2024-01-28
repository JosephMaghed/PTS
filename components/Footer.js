/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const Footer = () => {
	return (
		<footer className={`caption-regular mt-7 border-t-2  p-4`}>
			<div className="container flex justify-between">
				<p>@2022 ALL rights reserved.</p>
				<a href="https://www.linkedin.com/company/pts-holdings/">
					<i>
						<img
							src="/assets/icons/linkedin-icon.svg"
							alt="linkedin"
							className="h-4 w-4 lg:h-6 lg:w-6"
						/>
					</i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
