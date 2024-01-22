import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <Image
        alt="logo"
        src="/logo.svg"
        width={0}
        height={0}
        sizes="100vh"
        className="h-10 w-10"
      />

      <Link href="#">
        <Button variant="outline" className="border-red">
          Contato
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
