import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border max-width bg-background">
      {/* Contact Details */}
      <p className="text-center mt-2 text-sm">
        Copyright © {new Date().getFullYear()}
      </p>

      <Link
        href="https://lucascardoso.vercel.app/"
        className="flex flex-col tablet:flex-row justify-center gap-1"
      >
        <p className="text-center text-sm">Desenvolvido por Lucas Cardoso</p>
        <p className="hidden tablet:block">|</p>
        <p className="text-red text-center">Clique e saiba mais</p>
      </Link>
    </footer>
  );
};

export default Footer;
