"use client";

import { ServiceProps } from "@/types/service";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { watchInView } from "@/lib/watchInView";
import { useRef } from "react";
import SectionHeading from "../SectionHeading";

interface ServicesTabContentProps {
  services: ServiceProps[];
}

const ServicesSection = ({ services }: ServicesTabContentProps) => {
  const ref = useRef(null);
  const id = "services";
  watchInView({ ref, id });

  return (
    <section
      className="max-w-[900px] h-full flex items-center justify-center"
      id={id}
      ref={ref}
    >
      <SectionHeading title="Serviços" />

      <Carousel className="w-full h-full">
        <CarouselContent className="gap-4 h-full">
          {services.map((service, index) => (
            <CarouselItem
              key={index}
              className="tablet:basis-1/4 h-[350px] relative rounded flex items-end justify-center"
            >
              <div className="h-1/4 text-center flex items-center p-2 text-zinc-700 font-semibold dark:font-light dark:text-white">
                {service.title}
              </div>

              <div className="w-full h-1/3 bg-gradient-to-t from-white dark:from-black to-transparent absolute bottom-0 left-0 -z-10"></div>

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
        <CarouselNext className="right-0" />
        <CarouselPrevious className="left-0" />
      </Carousel>
    </section>
  );
};

export default ServicesSection;
