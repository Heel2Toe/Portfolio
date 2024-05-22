import { useEffect, useState } from "react";
import Project from "./project";
import ProjectCard from "./project-card";
import axios from "axios";
import toast from "react-hot-toast";
import { useControl } from "../hooks/useControl";

export interface Projects {
  name: string;
  description: string;
  imageLink: string;
  siteLink: string;
  githubLink: string;
}

const Projects = () => {
  const { setLoading, setError } = useControl();
  const [projects, setProjects] = useState<Projects[]>([]);
  const [singleProject, setSingleProject] = useState<Projects>({
    name: "",
    description: "",
    imageLink: "",
    siteLink: "",
    githubLink: "",
  });

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        let result = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/getProjects/guest`
        );
        setProjects(result.data.response);
      } catch (err: any) {
        console.log("error at getProjects", err);
        setError(true);
        toast.error("Something went wrong");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    getProjects();
  }, []);

  const exit = () => {
    setSingleProject({
      name: "",
      description: "",
      imageLink: "",
      siteLink: "",
      githubLink: "",
    });
  };

  return (
    <>
      {!singleProject.name ? 
        <div className="h-full w-full bg-[#132413] text-white/90 p-10 space-y-10 flex flex-col overflow-y-scroll hide-scrollbar">
          <h1 className="text-7xl font1 self-start">PROJECTS</h1>
          {projects &&
            projects.map((project, index) => (
              <ProjectCard
              index={index}
                imageLink={project.imageLink}
                name={project.name}
                description={project.description}
                chosen={() =>
                  setSingleProject(() => ({
                    name: project.name,
                    description: project.description,
                    imageLink: project.imageLink,
                    githubLink: project.githubLink,
                    siteLink: project.siteLink,
                  }))
                }
              />
            ))}
        </div>
       : 
        <Project chosen={singleProject} exit={exit} />
      }
    </>
  );
};

export default Projects;
