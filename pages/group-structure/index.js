import SubsidiariesSection from 'components/homepage/SubsidiariesSection'
import { NextSeo } from 'next-seo'

const SubsidiariesPage = () => {
  return (
    <div className="container pt-10">
      <NextSeo
        title="PTS Holdings | Subsidiaries"
        description="Discover our portfolio of successful subsidiaries across various industries. Learn how they are transforming and shaping the future of business."
      />
      <SubsidiariesSection />
    </div>
  )
}

export default SubsidiariesPage
