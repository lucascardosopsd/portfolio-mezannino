"use client";

import { PortfolioProps } from "@/types/portfolio";
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

interface PortfolioTabContentProps {
  portfolio: PortfolioProps[];
}

const PortfolioSection = ({ portfolio }: PortfolioTabContentProps) => {
  const id = "portfolio";

  const ref = useRef(null);
  watchInView({ ref, id });

  const carouselContent = (
    <CarouselContent>
      {portfolio.map((project, index) => (
        <CarouselItem key={index}>
          <div className="flex flex-col tablet:flex-row flex-grow gap-4 p-4 min-h-[400px] bg-background">
            <div className="flex flex-col flex-1 justify-center">
              <p className="text-xl mb-2 text-red text-center tablet:text-start">
                {project.title}
              </p>
              <p className="text-sm text-center tablet:text-start">
                {project.description}
              </p>
            </div>

            <div className="relative flex-1 flex justify-center">
              <Image
                alt="Foto"
                src={project.pic}
                sizes="100vh"
                width={0}
                height={0}
                className="h-full w-auto object-contain rounded"
              />
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );

  return (
    <section
      className="tablet:max-w-[900px] h-full flex items-center justify-center"
      id={id}
      ref={ref}
    >
      <SectionHeading title="Projetos" />

      <Carousel className="hidden tablet:block">
        {carouselContent}
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>

      <Carousel orientation="vertical" className="block tablet:hidden">
        {carouselContent}
      </Carousel>
    </section>
  );
};

export default PortfolioSection;
