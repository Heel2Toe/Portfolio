import { FaSquareGithub } from "react-icons/fa6";
import Polaroid from "./polaroid";
import { Projects } from "./projects";
import { Link } from "react-router-dom";
import { IoLogoVercel } from "react-icons/io5";
import { motion } from "framer-motion";

interface ProjectProps {
  chosen: Projects;
  exit: () => void;
}

const Project: React.FC<ProjectProps> = ({ chosen, exit }) => {
  return (
    <div className="relative h-full w-full p-10 flex flex-col">
      <button
        onClick={exit}
        className="absolute top-1 right-1 p-2 px-6 font2 font-bold text-white border text-sm
            hover:bg-white/90 hover:text-black duration-500"
      >
        back
      </button>
      <div className="flex justify-between">
        <Polaroid name={chosen.name} imageLink={chosen.imageLink} />

        <div className="mt-10 ml-16 flex flex-col space-y-16">
          <motion.p 
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: .3,
            duration: .5
          }}
          className="font1 text-white">
            {chosen.description}
            </motion.p>
          <div className="flex space-x-2">
            <Link to={chosen.githubLink} target="_blank">
              <motion.button
                initial={{
                  backgroundColor: "rgb(37 99 235)",
                }}
                animate={{
                  backgroundColor: "rgb(23 37 84)",
                }}
                whileHover={{
                  backgroundColor: "rgb(37 99 235)",
                  transition: {
                    duration: 0.003,
                  },
                }}
                className="flex space-x-2 items-center p-2 px-6 font2 font-bold bg-blue-950 text-white  border border-white/50 text-sm
            hover:bg-blue-600 duration-500"
              >
                <FaSquareGithub />
                <p>Github</p>
              </motion.button>
            </Link>

            <Link to={chosen.siteLink} target="_blank">
              <motion.button
                initial={{
                  backgroundColor: "rgb(5 150 105)",
                }}
                animate={{
                  backgroundColor: "rgb(2 44 34)",
                }}
                whileHover={{
                  backgroundColor: "rgb(5 150 105)",
                  transition: {
                    duration: 0.003,
                  },
                }}
                className="flex space-x-2 items-center p-2 px-6 font2 font-bold bg-emerald-950 text-white  border border-white/50 text-sm
            hover:bg-emerald-600 duration-500"
              >
                <IoLogoVercel />
                <p>Live site</p>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
