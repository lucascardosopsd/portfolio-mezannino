import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border max-width">
      {/* Contact Details */}
      <p className="text-center mt-2 text-sm">
        Copyright © {new Date().getFullYear()}
      </p>

      <Link
        href="https://lucascardoso.vercel.app/"
        className="flex justify-center gap-1"
      >
        <p className="text-center text-sm">Desenvolvido por Lucas Cardoso |</p>
        <p className="text-red">Clique e saiba mais</p>
      </Link>
    </footer>
  );
};

export default Footer;
