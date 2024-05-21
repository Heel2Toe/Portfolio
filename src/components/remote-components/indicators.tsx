import { useControl } from "../../hooks/useControl";
import classNames from "classnames";

const Indicators = () => {
  const { error, loading } = useControl();

  return (
    <div className="w-[50%] flex space-x-2 p-2">
      <div
        className={classNames(
          `h-2 w-10 rounded-sm`,
          error ? "bg-red-300 glow-error" : "bg-green-300 glow-ok"
        )}
      />
      <div
        className={classNames(
          `h-2 w-10 rounded-sm duration-300`,
          loading ? "bg-yellow-300 led-loading" : "bg-stone-800"
        )}
      />
    </div>
  );
};

export default Indicators;
