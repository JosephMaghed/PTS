import Image from "next/image";

export const PerksList = ({ list }) => {
    return (
        <div>
            {list.map((item, i) => (
                <div
                    key={item + i}
                    className="flex flex-col items-center justify-start space-y-3 text-center lg:flex-row lg:items-start lg:text-left"
                >
                    <div className="relative mt-5 h-4 w-4 shrink-0 basis-4 overflow-hidden rounded-xl">
                        <Image
                            src={"/assets/icons/check-mark.svg"}
                            alt="check icon"
                            fill
                            layout="fill"
                        />
                    </div>
                    <p className="md:body-large-regular body-small-regular ml-4 whitespace-pre-line">
                        {item}
                    </p>
                </div>
            ))}
        </div>
    );
};
