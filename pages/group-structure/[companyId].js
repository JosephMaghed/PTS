import CompanyInfo from 'components/companyPage/CompanyInfo'
import { companiesData } from 'data/CompaniesData'
import { NextSeo } from 'next-seo'

export const getServerSideProps = async (context) => {
  {
    const { query } = context
    return { props: { query } }
  }
}

export default function CompanyPage({ query }) {
  const companyData = companiesData[query.companyId]

  const perks =
    companyData.companyObjectives || companyData.values || companyData.services

  return (
    <div className="container pt-8">
      <NextSeo
        title={`PTS Holding | ${companyData.name}`}
        description="Discover the expertise of our subsidiary and its impact on the industry. Learn about our innovative solutions and how we can help drive your business forward."
      />
      <CompanyInfo companyData={companyData} perks={perks} />
    </div>
  )
}
