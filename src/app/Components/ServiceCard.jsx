import Image from "next/image";

export default function ServiceCard({ imageSrc, title, description }) {
  return (
    <div className="max-w-sm mx-auto text-center">
      <div className="w-[500px] h-[500px] mx-auto mb-6 overflow-hidden rounded-full">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-[15px] font-light leading-relaxed">{description}</p>
    </div>
  );
}