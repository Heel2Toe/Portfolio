import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  imageLink: string;
  name: string;
  description: string;
  index: number;
  chosen: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageLink,
  name,
  description,
  index,
  chosen,
}) => {
  const [mode, setMode] = useState(false);
  const name1 = name.substring(0, 1).toUpperCase() + name.substring(1, name.length);

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        delay:  0.5*index,
        duration: 0.5
      }}
      onHoverStart={() => setMode(true)}
      onHoverEnd={() => setMode(false)}
      className="relative w-full p-1 flex justify-between items-center select-none"
    >
      <img
        src={imageLink}
        className={classNames(
          ` h-44 w-96 duration-500`,
          mode ? "grayscale-0 -translate-x-2" : "grayscale"
        )}
      />

      <div className="self-start flex flex-col space-y-2">
        <p
          className={classNames(
            `self-start mt-4 ml-4 text-sm font2 font-bold translate-x-2 duration-500`,
            mode ? "translate-x-0" : "-translate-x-4 text-transparent"
          )}
        >
          {description.substring(0, 150)}....
        </p>

        <div className="flex w-full justify-between">
          <button
            onClick={chosen}
            className={classNames(
              `ml-6 mt-10 font2 font-bold p-3 border cursor-pointer text-sm duration-300 -translate-x-2
                       hover:bg-white/70 hover:text-black`,
              !mode && "text-transparent translate-x-0 border-none"
            )}
          >
            learn more
          </button>

          <h1
            className={classNames(
              ` font1 text-3xl duration-500 -translate-x-2`,
              !mode && "text-transparent translate-x-0"
            )}
          >
            {name1}
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
