import classNames from "classnames";

const TvGrain = ({ loading }: { loading: boolean }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full pointer-events-none z-20 flex justify-center items-center p-3">
      <div
        className={classNames(
          `h-full w-full tvStatic z-20`,
          loading ? "opacity-100" : "opacity-[0.1]"
        )}
      />
    </div>
  );
};

export default TvGrain;
