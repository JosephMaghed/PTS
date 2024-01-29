import { useState, useEffect } from 'react'
import CompanyInfo from 'components/companyPage/CompanyInfo'
import { NextSeo } from 'next-seo'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function SocialResponsibilityPage() {
  const companyData = {
    name: 'Corporate Social Responsibility',
    logo: '/assets/logos/kemtech logo.png',
    description:
      'The “Applied Technological Valley- Kemtech Valley” initiative aims to ' +
      'build highly specialized technical cadres and develop the creative ' +
      'capabilities of Egyptian youth, as well as support start-ups and small and ' +
      'medium-sized companies in the field of applied technology and build ' +
      'digital community awareness through various programs. ' +
      'The initiative was launched by cooperation between: ' +
      'New Cairo Technological University, one of the first Egyptian that is ' +
      'specialized in the development of technological and technical ' +
      'education in Egypt in parallel with the academic path with the quality ' +
      'and adequacy required by the labor market and achieving excellence, ' +
      'creativity and global leadership. The initiative in 2 years is entending to 5 technical universities as well as an agreement with the supreme council of Technoligical universities.' +
      'PTS Group is an Egyptian group of companies that aims to add ' +
      'direct value in the investment value chain through its expertise and deep ' +
      'industries knowledge along with local and global partners building ' +
      'robust ecosystem to help businesses mainly entrepreneurs, startups and ' +
      'SMEs to build resilience, spur innovation, expedite growth and expand ' +
      'into key markets.',
    socialResponsibility: [
      'Enriching the culture of entrepreneurship, innovation and investment among promising Egyptian innovators ',
      'Contribute in building societal awareness based on digital and information technology. ',
      'Maximizing the utilization of scientific cadres and specialized experts',
      'Upgrading the Egyptian technological industries by qualifying them to compete in global markets and developing innovative thoughts',
      "Creating a forum to communicate with local and international investment channels, Global marketing of Egyptian products and applications under the slogan 'Technovate in Egypt' ",
    ],
    images: [
      '/assets/pics/pic5.jpg',
      '/assets/pics/pic1.png',
      '/assets/pics/pic2.png',
      '/assets/pics/pic3.png',
      '/assets/pics/pic4.png',
    ],
  }

  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImgIndex(
        (prevIndex) => (prevIndex + 1) % companyData.images.length
      )
    }, 4000)

    return () => clearInterval(intervalId) // Cleanup interval on component unmount
  }, [currentImgIndex])

  const handlePrevClick = () => {
    setCurrentImgIndex(
      (prevIndex) =>
        (prevIndex - 1 + companyData.images.length) % companyData.images.length
    )
  }

  const handleNextClick = () => {
    setCurrentImgIndex(
      (prevIndex) => (prevIndex + 1) % companyData.images.length
    )
  }

  const currentImg = companyData.images[currentImgIndex]
  const perks = companyData.socialResponsibility

  return (
    <div className="container py-8">
      <NextSeo
        title="PTS Holdings | Social Responsibility"
        description="Discover how our social responsibility efforts are making a positive impact in our communities. Learn about our initiatives and partnerships. Join us in creating a better world"
      />
      <CompanyInfo
        companyData={{ ...companyData, img: currentImg }}
        perks={perks}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <div
        className="gallery-navigation right-side-item"
        style={{ float: 'right', marginRight: '230px' }}
      >
        {/* <button onClick={handlePrevClick} style={{backgroundColor:"#001f3f",padding:"10px"}} className=" bg-blue-navy text-white">
          
        <span style={{ display: 'flex', alignItems: 'center' }}>&#9665; Previous</span>
          </button>
        <button onClick={handleNextClick} style={{backgroundColor:"#001f3f" ,padding:"10px",margin:"10px"}} className=" bg-blue-navy text-white">
        <span style={{ display: 'flex', alignItems: 'center' }}>Next &#9655;</span>

        </button> */}
      </div>
    </div>
  )
}
