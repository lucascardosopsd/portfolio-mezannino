interface TitleProps {
  title: string;
  subTitle: string;
  description: string;
}

interface MainWrapperProps {
  title: TitleProps;
}

const MainWrapper = ({ title }: MainWrapperProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg">{title.title}</p>
      <p className="text-6xl uppercase">{title.subTitle}</p>
      <p className="text-xl max-w-[700px] text-center">{title.description}</p>
    </div>
  );
};

export default MainWrapper;
