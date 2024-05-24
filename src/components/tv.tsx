import { useAdmin } from "../hooks/useAdmin";
import { useControl } from "../hooks/useControl";
import Admin from "./admin";
import ChannelIndicator from "./channel-indicator";
import Desc from "./description";
import Education from "./education";
import Projects from "./projects";
import TvGrain from "./tv-grain";
import MainLoading from "./main-loading";

interface Props{
  channel : number,
  warmedUp : boolean
}

const Television: React.FC<Props> = ({ channel, warmedUp }) => {
  const { counterUp, switchCounter } = useAdmin();
  const { loading } = useControl();

  const buttonCounter = () => {
    counterUp();
  };

  return (
    <div className="self-end w-[78%] h-full border border-white/60 rounded-md bg-white flex flex-col items-center">
      <div className="relative h-full w-full p-3 rounded-t-md shadow-2xl bg-[#0b150b] overflow-hidden">
        <TvGrain loading={loading} />
        {switchCounter == 5 && <Admin />}
        {warmedUp ? (
          <>
            <ChannelIndicator channel={channel} />
            {channel == 0 && <Desc />}
            {channel == 1 && <Education />}
            {channel == 2 && <Projects />}
          </>
        ) : (
          <MainLoading />
        )}
      </div>

      <div className="h-[60px] w-full bg-white/30 flex justify-center items-center">
        <div
          onClick={() => buttonCounter()}
          className="h-10 w-10 rounded-full border-2 border-black"
        ></div>
      </div>
    </div>
  );
};

export default Television;
