"use client";
import { watchInView } from "@/lib/watchInView";
import { useRef } from "react";
import SectionHeading from "../SectionHeading";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";

interface AboutProps {
  businessProfile: BusinessProfileProps;
}

const BusinessProfile = ({ businessProfile }: AboutProps) => {
  const id = "about";

  const ref = useRef(null);
  watchInView({ ref, id });

  return (
    <section
      className="flex h-full w-full max-w-[800px] items-center justify-center pb-20"
      id={id}
      ref={ref}
    >
      <SectionHeading title="Sobre" />

      <div className="flex gap-2 bg-background rounded border border-red p-8">
        <div className="flex flex-col relative flex-1">
          <Separator
            orientation="vertical"
            className="absolute -left-5 top-0 bg-red"
          />
          <p className="text-xl text-red">Nossa História</p>
          <p>{businessProfile.history}</p>
        </div>
        <div className="flex flex-col gap-2 flex-1 border border-border">
          <div className="w-full h-60 rounded">
            <Link href={businessProfile.mapsLink} target="_blank">
              <Image
                alt="Print do Maps"
                src={businessProfile.mapsPrint}
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover rounded"
              />
            </Link>
          </div>
          <div className="flex flex-col p-8 space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-red" />
              <p>{businessProfile.address}</p>
            </div>

            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-red" />
              <p>{businessProfile.hours}</p>
            </div>

            <div className="flex items-start gap-2 h-full ">
              <LuPhone className="text-red" />
              <div className="flex flex-col gap-2">
                {businessProfile.phones.map((phone, index) => (
                  <p key={index}>{phone}</p>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <HiOutlineMail className="text-red" />
              <p>{businessProfile.email}</p>
            </div>

            <div className="flex flex-col">
              <p>Projetos para</p>
              <ul>
                <li>• Financiamento habitacional</li>
                <li>• Construção</li>
                <li>• Regularização de imóveis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProfile;
