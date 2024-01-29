import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Contact() {
    return (
        <section className="container py-7">
            <NextSeo
                title="PTS Holdings | Contact"
                description="Looking to get in touch with us? Contact our team at PTS through our email. We look forward to hearing from you and answering any questions you may have."
            />
            <h1
                className="md:header3 body-medium-bold text-center text-navy-basic"
                style={{ margin: "0 auto" }}
            >
                Get In Touch With Us
            </h1>
            <div className="mt-5 w-full rounded-2xl bg-navy-basic px-6 py-16 text-white">
                <div className="mb-10">
                    <div className="text-center">
                        <p className="body-small-regular md:body-medium-regular">
                            For inquiries or follow-ups, don’t hesitate to
                            approach us{" "}
                        </p>
                    </div>
                    <h2 className="body-medium-bold md:body-large-bold mb-1">
                        Email Address
                    </h2>
                    <p className="body-small-regular md:body-medium-regular">
                        Info@pts.holdings
                    </p>
                </div>

                <div className="flex flex-wrap items-start justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/2">
                        <h2 className="body-medium-bold md:body-large-bold mb-2">
                            Location
                        </h2>
                        <div className="container">
                            <div
                                className="left-element"
                                style={{ fontSize: "20px" }}
                            >
                                <li>
                                    {" "}
                                    <p style={{ display: "inline" }}>
                                        EG: 7 st. Port Said Engineering Works
                                        Co, El Nozha, Cairo, EGY
                                    </p>
                                </li>
                                <br />
                                <li>
                                    {" "}
                                    <p style={{ display: "inline" }}>
                                        EG: Agora Mall, El Nasr, New Cairo, EGY
                                    </p>
                                </li>
                                <br />
                                <li>
                                    {" "}
                                    <p style={{ display: "inline" }}>
                                        US: 16192 Coastal Highway Lew as
                                        Delaware, USA
                                    </p>
                                </li>
                                <br />
                                <li>
                                    {" "}
                                    <p style={{ display: "inline" }}>
                                        UK: 71-75 Shelton St, Covent Garden,
                                        WC2H 9JQ, Greater London, UK
                                    </p>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full md:mt-0 md:w-1/2 lg:mt-0 lg:w-1/2">
                        <div
                            className="right-element"
                            style={{ marginLeft: "auto", marginTop: "50px" }}
                        >
                            <Image
                                src="/assets/pics/ContactQR.png"
                                alt=""
                                layout="responsive"
                                objectFit="contain"
                                width={340}
                                height={360}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
