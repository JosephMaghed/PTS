import CompanyCard from "components/CompanyCard";
import { companiesData } from "data/CompaniesData";
//import styles from '/styles/globales.css';

const SubsidiariesSection = () => {
	return (
		<section className=" pb-20">
			<h2 className="md:header3 body-medium-bold mb-20 w-full text-center text-navy-basic">
				Group structure
			</h2>
			<div className=" mx-auto flex flex-wrap  items-stretch justify-center gap-x-6 gap-y-[75px]  ">
				{Object.keys(companiesData).map((companyId) => {
					let companyData = companiesData[companyId];
					if (companyData.category === "structure") {
						return (
							<CompanyCard
								key={companyId}
								companyName={companyData.name}
								logo={companyData.logo}
								description={companyData.description}
								href={`/group-structure/${companyId}`}
							/>
						);
					}
				})}
			</div>

			<div
				className=" mx-auto flex flex-wrap  items-stretch justify-center gap-x-6 gap-y-[75px]  "
				style={{ marginTop: "100px" }}
			>
				{Object.keys(companiesData).map((companyId) => {
					let companyData = companiesData[companyId];
					if (companyData.category === "stakeholders") {
						return (
							<CompanyCard
								key={companyId}
								companyName={companyData.name}
								logo={companyData.logo}
								description={companyData.description}
								href={`/group-structure/${companyId}`}
							/>
						);
					}
				})}
			</div>
			<h2
				className="md:header3 body-medium-bold mb-20 w-full text-center text-navy-basic"
				style={{ marginTop: "50px" }}
			>
				Our partners
			</h2>
			<div className=" mx-auto flex flex-wrap  items-stretch justify-center gap-x-6 gap-y-[75px]  ">
				{Object.keys(companiesData).map((companyId) => {
					let companyData = companiesData[companyId];
					if (companyData.category === "partners") {
						return (
							<CompanyCard
								key={companyId}
								companyName={companyData.name}
								logo={companyData.logo}
								description={companyData.description}
								href={`/group-structure/${companyId}`}
							/>
						);
					}
				})}
			</div>
		</section>
	);
};
export default SubsidiariesSection;
