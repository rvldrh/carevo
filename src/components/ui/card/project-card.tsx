import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  date: string;
  image: string;
  href: string;
}

export default function ProjectCard({
  title,
  date,
  image,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="rounded-xl border bg-white overflow-hidden cursor-pointer block hover:shadow-md transition"
    >
      <div className="h-[260px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-500 mt-1">{date}</p>
      </div>
    </Link>
  );
}