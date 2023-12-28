import Image from 'next/legacy/image'
import { useHover } from 'hooks/userHover'

export default function UserImages({ images, alt }) {
  const { hovered, ref } = useHover()
  const { avatar, banner, hover_change, onHover_avatar } = images
  return (
    <div className="relative">
      <Image src={'/' + banner} alt={alt} width={1024} height={600} className="rounded-xl" />
      {/* <div
        ref={ref}
        className="absolute left-1/2 -bottom-16 z-10 -translate-x-1/2 transform cursor-pointer rounded-full"
      >
        {hovered && hover_change ? (
          <Image
            src={'/' + onHover_avatar}
            alt={alt}
            width={120}
            height={120}
            className="rounded-full"
          />
        ) : (
          <Image src={'/' + avatar} alt={alt} width={200} height={200} className="rounded-full" />
        )}
      </div> */}
      {/* Image border */}
      {/* <div className="absolute left-1/2 -bottom-[62px] h-[130px] w-[130px] -translate-x-1/2 transform rounded-full bg-white" /> */}
    </div>
  )
}
