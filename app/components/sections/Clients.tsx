"use client";
import { watchInView } from "@/lib/watchInView";
import { useRef } from "react";
import SectionHeading from "../SectionHeading";
import { ClientProps } from "@/types/clients";
import { Card, CardContent } from "../ui/card";

interface ClientsSectionProps {
  clients: ClientProps[];
}

const ClientsSection = ({ clients }: ClientsSectionProps) => {
  const id = "clients";

  const ref = useRef(null);
  watchInView({ ref, id });

  return (
    <section
      className="flex h-full w-full max-w-[1000px] items-center justify-center"
      id={id}
      ref={ref}
    >
      <SectionHeading title="Clientes" />

      <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-4 border border-red p-4">
        {clients.map((client, index) => (
          <Card key={index}>
            <CardContent>
              <div className="flex flex-col">
                <p className="text-red text-xl">{client.name}</p>
                <div className="flex relative">
                  <p className="text-5xl absolute -left-4 top-1 font-light text-muted-foreground">
                    "
                  </p>
                  <p>{client.comment}</p>
                </div>
                <p className="text-muted-foreground">{client.social}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
