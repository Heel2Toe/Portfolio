import classNames from "classnames";
import { CiBatteryFull } from "react-icons/ci";
import { useControl } from "../../hooks/useControl";
import {
  MdOutlineSignalCellularNodata,
  MdOutlineSignalCellular4Bar,
  MdOutlineSignalCellularConnectedNoInternet4Bar,
} from "react-icons/md";

const channelNames = ["About Me", "My Education", "My Projects"];

const LCD = ({ counter }: { counter: number }) => {
  const { channel, error, loading } = useControl();

  return (
    <div
      className={classNames(
        `relative digital-text w-full h-32  flex items-center justify-center duration-300`,
        counter == 5
          ? " bg-stone-800 text-transparent"
          : "glow-lcd text-white/60  bg-blue-600"
      )}
    >
      <h1 className="absolute top-2 left-2 text-sm">
        channel : <span>{channel + 1}</span>
      </h1>
      <CiBatteryFull className="absolute top-1 right-1 text-xl" />
      <h1 className="text-md border border-dotted border-white/50 p-2 w-[90%] flex justify-center">
        {channelNames[channel]}
      </h1>
      <p
        className={classNames(
          `absolute bottom-1 left-2 text-lg flex`,
          (error || loading) && "blinking"
        )}
      >
        {error ? 
          <MdOutlineSignalCellularNodata />
        : 
        loading ? <MdOutlineSignalCellularConnectedNoInternet4Bar/> :  <MdOutlineSignalCellular4Bar />
        }
      </p>
    </div>
  );
};

export default LCD;
