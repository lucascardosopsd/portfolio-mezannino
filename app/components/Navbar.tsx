import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[10svh]">
      <Image
        alt="logo"
        src="/logo.svg"
        width={0}
        height={0}
        sizes="100vh"
        className="h-10 w-10"
      />

      <div className="relative">
        <Link href="#">
          <Button
            variant="outline"
            className="border-red hover:bg-red hover:text-foreground"
          >
            Contato
          </Button>
        </Link>

        <Button
          variant="outline"
          className="border-red bg-red text-transparent absolute m-0 inset-0 -z-10 animate-ping"
        >
          Contato
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
