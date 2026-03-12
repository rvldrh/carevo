import Image from "next/image"

interface AvatarProps {
  src: string
  alt: string
  size?: number
}

export default function Avatar({ src, alt, size = 40 }: AvatarProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full overflow-hidden bg-gray-200"
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  )
}