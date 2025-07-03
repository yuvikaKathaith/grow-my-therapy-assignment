import Image from "next/image";

const ServiceCard = ({ service, index }) => {
  return (
    <div className="max-w-[400px] mx-auto text-center text-[#7a6e5c]">
  <div className="w-[400px] h-[400px] mb-6 overflow-hidden rounded-full">
    <Image
      src={service.imageSrc}
      alt={service.title}
      width={400}
      height={400}
      className="object-cover w-full h-full"
    />
  </div>
  <h4 className="text-3xl font-ebgaramond font-medium mb-2">
    {service.title}
  </h4>
  <p className="text-[15px] font-light leading-relaxed">
    {service.description}
  </p>
</div>

  );
}
export default ServiceCard;