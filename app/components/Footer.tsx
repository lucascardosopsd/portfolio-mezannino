import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border max-width bg-background space-y-2">
      <p className="text-center">
        Bs Ferracini, Engenharia e Construcao LTDA | CNPJ: 49.795.935/0001-09
      </p>

      <p className="text-center">Copyright © {new Date().getFullYear()}</p>

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
