import Image from "next/image"
import ceoImg from "public/assets/abd-elaziz-mandour.png"
import signatureImg from "public/assets/signature.svg"
import waveImg from "public/assets/wave.svg"
import { HiOutlineChevronDoubleDown } from "react-icons/hi"
const HeroSection = () => {
    return (
        <section className="flex flex-col-reverse items-center justify-center pt-8 lg:flex-row lg:justify-between">
            <div className="space-y-3 text-center md:mr-8 lg:w-1/2 lg:text-left">
                <h2 className="title-large lg:header1 mx-auto w-[80%] font-pt font-bold text-navy-basic lg:w-full">
                    Ready to build the future now?
                </h2>
                <p className="body-large-regular">
                    We are flexible, understanding that business conditions
                    change, goals change, and technology changes. We
                    continuously seek ways to develop and improve ourselves,
                    both as a company and as individuals.....
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 lg:w-fit">
                    <Image
                        src={ceoImg}
                        alt="Eng. Abdulaziz mandour"
                        className=" h-8 w-8 rounded-full"
                    />
                    <div>
                        <h3 className="body-medium-bold whitespace-nowrap">
                            Eng. Abdulaziz Mandour
                        </h3>
                        <p className=" body-small-regular whitespace-nowrap">
                            Founder of PTS Holdings
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <Image
                    layout="fixed"
                    src={"/assets/pics/text-on-world-map.png"}
                    alt="bushiness text on world map"
                    width={530}
                    height={340}
                />
            </div>
        </section>
    )
}

export default HeroSection
