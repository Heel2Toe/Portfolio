import { useEffect, useState } from "react";
import { useAdmin } from "../../hooks/useAdmin";
import SingleProject from "./single-project";
import axios from "axios";
import toast from "react-hot-toast";

const ProjectDisplayAdmin = () => {
  const { adminCounter } = useAdmin();
  const [projectNames, setProjectNames] = useState([]);

  useEffect(() => {
    const getProjectNames = async () => {
      try {
        let result = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/getProjects/admin`
        );
        setProjectNames(result.data.result);
      } catch (error) {
        console.log("Error at getProjectNames", error);
        toast.error("Something went wrong");
      }
    };

    getProjectNames();
  }, []);

  return (
    <div className="h-full w-full flex flex-col pt-10  space-y-10">
      <div className="w-full flex justify-center space-x-2">
        <button className="border border-black text-xs p-2 w-40 hover:bg-white/70 duration-500">
          edit description
        </button>
        <button className="border border-black text-xs p-2 w-40 hover:bg-white/70 duration-500">
          edit education
        </button>
        <button
          onClick={() => adminCounter(2)}
          className="border border-black text-xs p-2 w-40 hover:bg-white/70 duration-500"
        >
          new project
        </button>
      </div>

      {projectNames &&
        projectNames.map((projName) => <SingleProject title={projName} />)}
    </div>
  );
};

export default ProjectDisplayAdmin;
