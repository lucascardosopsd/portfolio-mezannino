import Link from "next/link";
import { PiWhatsappLogoThin } from "react-icons/pi";

const WppFloatingButton = () => {
  return (
    <div className="absolute z-20 bottom-4 right-4">
      <Link
        href="https://api.whatsapp.com/send?phone=5517992777857"
        className="relative"
      >
        <div className="flex items-center justify-center border border-red bg-background text-red rounded-full h-10 w-10 tablet:hidden">
          <PiWhatsappLogoThin className="text-2xl" />
        </div>

        <div className="h-10 w-10 bg-red absolute -z-10 animate-ping rounded-full inset-0 m-0" />
      </Link>
    </div>
  );
};

export default WppFloatingButton;
