import { navbarLinks } from "@/constant/navbarLinks";
import { Separator } from "@radix-ui/react-separator";

interface TabsProps {
  currentMenu: string;
  setCurrentMenu: (label: string) => void;
}

const Tabs = ({ currentMenu, setCurrentMenu }: TabsProps) => {
  return (
    <div className="gap-2 p-4 tablet:p-0 absolute tablet:static bottom-0 left-0 overflow-x-auto w-full flex justify-center z-20 bg-background tablet:bg-transparent">
      {navbarLinks.map((link, index) => (
        <span
          className="flex"
          key={index}
          onClick={() => setCurrentMenu(link.label)}
        >
          <span
            className={`font-normal cursor-default hover:text-red transition ${
              currentMenu == link.label && "text-red"
            }`}
          >
            {link.title}
          </span>
          {index < navbarLinks.length - 1 && (
            <Separator orientation="vertical" className="ml-2 bg-muted" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
