import Image from 'next/image'
export const ValueCard = ({ title, description, img }) => {
  return (
    <div className="flex max-w-[280px] flex-col items-center justify-center  space-y-4 py-6 px-4 text-center">
      <div className="relative h-[178px] w-[178px] overflow-hidden rounded-3xl">
        <Image src={img} layout="fill" alt="Chessboard" fill />
      </div>
      <div className="body-small-bold md:body-large-bold text-navy-basic">
        {title}
      </div>
      <div className="md:body-small-regular caption-regular">{description}</div>
    </div>
  )
}
