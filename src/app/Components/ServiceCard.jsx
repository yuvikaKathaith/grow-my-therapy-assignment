import Image from "next/image";

const ServiceCard = ({ service, index }) => {
  return (
    <div className="lg:max-w-[400px] sm:max-w-[250px] mx-auto text-center text-[#7a6e5c]">
      <div className="lg:w-[400px] lg:h-[400px] sm:w-[250px] sm:h-[250px] mb-6 overflow-hidden rounded-full">
        <Image
          src={service.imageSrc}
          alt={service.title}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <h4 className="lg:text-3xl sm:text-2xl font-ebgaramond font-medium mb-2">
        {service.title}
      </h4>
      <p className="lg:text-[15px] sm:text-[14px] font-light leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};
export default ServiceCard;
