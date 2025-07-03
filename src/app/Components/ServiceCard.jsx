import Image from "next/image";

const ServiceCard = ({ service, index }) => {
  return (
    <div className="max-w-[480px] mx-auto text-center text-[#7a6e5c]">
  <div className="w-[480px] h-[480px] mb-6 overflow-hidden rounded-full">
    <Image
      src={service.imageSrc}
      alt={service.title}
      width={480}
      height={480}
      className="object-cover w-full h-full"
    />
  </div>
  <h4 className="text-2xl font-ebgaramond font-medium mb-2">
    {service.title}
  </h4>
  <p className="text-[17px] font-light leading-relaxed">
    {service.description}
  </p>
</div>

  );
}
export default ServiceCard;