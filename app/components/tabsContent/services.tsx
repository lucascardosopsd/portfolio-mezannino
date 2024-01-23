import { ServiceProps } from "@/types/service";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

interface ServicesTabContentProps {
  services: ServiceProps[];
}

const ServicesTabContent = ({ services }: ServicesTabContentProps) => {
  return (
    <div className="max-w-[900px] h-full flex items-center !m-0 ">
      <Carousel className="flex items-center w-full h-full">
        <CarouselContent className="gap-4 p-2 h-full">
          {services.map((service, index) => (
            <CarouselItem
              key={index}
              className="basis-1/4 h-[350px] relative rounded flex items-end justify-center"
            >
              <div className="h-1/4 text-center flex items-center p-2">
                {service.title}
              </div>

              <div className="w-full h-1/4 bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 -z-10"></div>

              <Image
                alt="Imagem"
                src={service.image}
                sizes="100vh"
                width={0}
                height={0}
                className="-z-20 object-cover absolute left-0 top-0 w-full h-full rounded"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default ServicesTabContent;
