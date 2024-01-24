import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <ImSpinner2 className="animate-spin h-12 w-12 text-red" />
    </div>
  );
};

export default Loading;
