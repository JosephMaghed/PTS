import { companiesData } from "data/CompaniesData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		// Disable scroll when navbar is open
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [open]);

	let navLinks = [
		{
			name: "Home",
			description: "Who are we ",
			href: "/",
		},
		{
			name: "About",
			description: "Our Mission and vision",
			href: "/about",
		},
		{
			name: "Group Structure",
			description: "Our Subsidiaries & Portflio companies",
			href: "/group-structure",
			hoverOptions: Object.keys(companiesData).map((company) => ({
				name: companiesData[company].name,
				href: `/group-structure/${company}`,
			})),
		},
		{
			name: "Management Team",
			description: "Top leading team in the area",
			href: "/team",
		},
		{
			name: "Social Responsibilities",
			description: "Our aim towards our society",
			href: "/social-responsibilities",
		},
		{
			name: "Investment Portfolio",
			href: "/investment-portfolio",
		},
		{
			name: "Contact us",
			href: "/contact",
		},
	];

	return (
		<header>
			{/* for large screens Navbar */}
			<nav
				className={`$ h-24 w-full bg-white py-10 px-4 shadow-lg md:px-10 lg:h-fit lg:min-h-[180px] lg:py-10`}
			>
				{/* Logo image */}
				<div className=" container hidden flex-wrap items-center justify-between lg:flex">
					<Link href="/">
						<div className="relative h-[35px] w-[57px] md:h-[88px] md:w-[140px]">
							<Image
								src="/assets/logos/holdings-nav-logo.svg"
								alt="PTS holdings logo"
								layout="fill"
								fill
							/>
						</div>
					</Link>
					<div>
						{/* Upper navigation links that has no description */}
						<ul className="mb-4 flex justify-end">
							{navLinks.map((navLink) => {
								if (navLink.description) return "";
								return (
									<a key={navLink.name} href={navLink.href}>
										<li className="caption-medium mr-6 cursor-pointer hover:font-bold hover:underline">
											{navLink.name}
										</li>
									</a>
								);
							})}
						</ul>
						{/* bottom Navigation links */}
						<ul className="flex">
							{navLinks.map((navLink, i) => {
								if (!navLink.description) return "";
								return (
									<li
										key={navLink.name}
										className="group relative flex h-16 text-sm items-center text-gray-bold hover:text-navy-basic hover:font-bold hover:h-14"
									>
										{/* Add a Divider to the except for the first link  */}
										{i != 0 && (
											<div className="ml-3 mr-5  h-full w-[0.5px] bg-navy-dark "></div>
										)}
										{/* Main nav link & description */}
										<a href={navLink.href} className="text-md  ">
											<p className="body-medium-bold  ">
												{navLink.name}
											</p>
											<p className="caption-regular w-[80%] " >
												{navLink.description}
											</p>
										</a>
										{/* Hoverable menu for nav links that have more options */}
										{navLink.hoverOptions && (
											<ul className="absolute top-14 -right-10 z-40 hidden h-fit w-fit border-t-[9px] border-navy-basic bg-white  text-black shadow-lg delay-75 group-hover:block">
												{navLink.hoverOptions.map(
													(option, i) => (
														<Link
															href={option.href}
															key={option.name}
														>
															<li
																className={`w-full cursor-pointer px-4 py-5 transition-all  hover:bg-navy-dark hover:text-white `}
															>
																{option.name}
															</li>
														</Link>
													)
												)}
											</ul>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				{/* navigation bar for medium and small screens */}
				<div
					className={`flex h-full  items-center justify-between lg:hidden `}
				>
					<Link href="/">
						<div className="relative h-[50px] w-[81px] md:h-[88px] md:w-[140px]">
							<Image
								src="/assets/logos/holdings-nav-logo.svg"
								alt="PTS holdings logo"
								layout="fill"
								fill
							/>
						</div>
					</Link>

					{/* hamburger button icon */}
					<div
						className={`$ relative z-50 flex h-7 w-7 flex-col items-center justify-between`}
						onClick={() => {
							setOpen(!open);
						}}
					>
						<span
							className={`h-1 w-full transform rounded-full  bg-navy-basic transition duration-300 ease-in-out  ${
								open ? "translate-y-3 rotate-45" : ""
							}`}
						/>
						<span
							className={`h-1  rounded-full bg-navy-basic transition-all duration-300 ease-in-out ${
								open ? "h-0 w-0" : "w-full"
							}`}
						/>
						<span
							className={`h-1 w-full transform rounded-full  bg-navy-basic transition duration-300 ease-in-out  ${
								open ? "-translate-y-3 -rotate-45" : ""
							}`}
						/>
					</div>
				</div>
			</nav>
			{/* Nav links page for medium and small screens*/}
			<div
				className={`h-[80vh] bg-white pt-16 lg:hidden ${
					open
						? "fixed top-0 left-0 z-40 block h-screen w-full  transition-all duration-300 ease-in-out"
						: "fixed -top-[200vh] "
				}`}
			>
				<ul className="container ">
					{navLinks.map((navLink, i) => (
						<a key={navLink.name} href={navLink.href}>
							<li
								className={` border-dashed border-b-gray-basic py-6
								${i != navLinks.length - 1 && "border-b-2"}`}
							>
								{navLink.name}
							</li>
						</a>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
