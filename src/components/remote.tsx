import { useAdmin } from "../hooks/useAdmin";
import { useControl } from "../hooks/useControl";
import Indicators from "./remote-components/indicators";
import LCD from "./remote-components/lcd-display";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Remote = () => {
  const { channelUp, channelDown } = useControl();
  const { switchCounter } = useAdmin();

  return (
    <div className="relative w-[20%] h-full rounded-md bg-stone-900 border z-20 p-4 shadow-2xl space-y-10 flex flex-col">
      <LCD counter={switchCounter} />

      <div className="w-full">
        <Indicators />
      </div>

      <div className="w-full flex justify-center mt-10">
        <div className="h-40 w-40 rounded-xl bg-stone-700 flex items-center justify-between text-xl">
          <div
            onClick={() => channelDown()}
            className="h-full w-1/3 bg-white/70 rounded-s-xl flex items-center cursor-pointer hover:-translate-x-2 duration-500 hover:text-blue-500"
          >
            <IoMdArrowDropleft />
          </div>
          <div className="h-full w-1/3 flex items-center justify-center bg-stone-800">
            <div className="border h-4 w-4 rounded-full" />
          </div>
          <div
            onClick={() => channelUp()}
            className="h-full w-1/3 bg-white/70 rounded-e-xl flex justify-end items-center cursor-pointer hover:translate-x-2 duration-500 hover:text-blue-500"
          >
            <IoMdArrowDropright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remote;
