import { PortfolioProps } from "@/types/portfolio";
import { TabsContent } from "../ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

interface PortfolioTabContentProps {
  portfolio: PortfolioProps[];
}

const PortfolioTabContent = ({ portfolio }: PortfolioTabContentProps) => {
  return (
    <TabsContent
      value="portfolio"
      className="max-w-[900px] h-full flex items-center !m-0"
    >
      <Carousel>
        <CarouselContent>
          {portfolio.map((project, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-grow gap-4 p-4 min-h-[400px] bg-background">
                <div className="flex flex-col flex-1 justify-center">
                  <p className="text-xl mb-2 text-red">{project.title}</p>
                  <p className="text-sm">{project.description}</p>
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
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </TabsContent>
  );
};

export default PortfolioTabContent;
