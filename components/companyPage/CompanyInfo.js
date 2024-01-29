import Image from 'next/image'
import { PerksList } from './PerksList'

const CompanyInfo = ({ companyData, perks }) => {
  return (
    <div>
      <div className="mb-[100px] flex flex-col-reverse items-center justify-center space-y-3 lg:flex-row lg:space-y-0 lg:space-x-10">
        <div className="space-y-5 text-center md:mr-8 lg:w-1/2 lg:text-left">
          <h1 className="body-medium-bold lg:header3 text-navy-basic">
            {companyData.name}
          </h1>
          <p className="md:body-large-regular body-small-regular  whitespace-pre-wrap">
            {companyData.description}
          </p>
        </div>
        <div className="relative  h-[260px] w-[340px] overflow-hidden rounded-xl lg:h-[500px] lg:w-[570px]">
          <Image
            layout="fill"
            src={companyData.logo}
            alt={`${companyData.name} logo`}
            fill
          />
        </div>
      </div>

      <div className="flex flex-col-reverse gap-9 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="body-medium-bold lg:header3  text-center text-navy-basic lg:text-left">
            {companyData.values && <h2>Core Values:</h2>}
            {companyData.companyObjectives && <h2>Company Objectives:</h2>}
            {companyData.services && <h2>Services:</h2>}
            {companyData.socialResponsibility && (
              <h2>Social Responsibility Objectives:</h2>
            )}
          </div>
          <div>
            <PerksList list={perks} />
          </div>
        </div>

        <div className="relative mx-auto h-[260px] w-[340px] overflow-hidden rounded-xl lg:h-[500px] lg:w-[570px]">
          <Image
            src={companyData.img}
            alt={''}
            layout="fill"
            objectFit="cover"
            fill
          />
        </div>
      </div>
    </div>
  )
}
export default CompanyInfo
