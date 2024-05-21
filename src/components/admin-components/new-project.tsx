import { useState } from "react";
import ProjectImageBtn from "./project-image-btn";
import toast from "react-hot-toast";
import axios from "axios";
import { useAdmin } from "../../hooks/useAdmin";

const NewProject = () => {
  const [image, setImage] = useState("");
  const { adminCounter } = useAdmin();
  const [project, setProject] = useState({
    name: "",
    description: "",
    siteLink: "",
    githubLink: "",
  });

  const handleUpload = (url: string) => {
    setImage(url);
  };

  const handleChange = (e: any) => {
    const textbox = e.target.name;
    setProject((prev) => ({
      ...prev,
      [textbox]: e.target.value,
    }));
  };

  const handleProjectUpload = async () => {
    if (
      !project.name ||
      !project.description ||
      !project.siteLink ||
      !project.githubLink ||
      !image
    ) {
      console.log(project, image);

      return toast.error("Missing fields found");
    }
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/projectUpload`,
        {
          name: project.name,
          description: project.description,
          siteLink: project.siteLink,
          githubLink: project.githubLink,
          imageLink: image,
        }
      );
      if (result.data == "saved") {
        toast.success("Project uploaded");
        adminCounter(2);
      }
    } catch (err: any) {
      console.log("err at handleprojectUpload", err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="h-full w-full space-y-4">
      <div className="w-1/2">
        <h1>Project Name</h1>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="w-full outline-none p-1 text-xs bg-transparent border border-black"
        />
      </div>
      <div className="w-1/2">
        <h1>Project Description</h1>
        <textarea
          onChange={handleChange}
          name="description"
          className="w-full h-36 outline-none p-1 text-xs bg-transparent border border-black"
        />
      </div>
      <div className="w-1/2">
        <h1>Site Link</h1>
        <input
          onChange={handleChange}
          type="text"
          name="siteLink"
          className="w-full outline-none p-1 text-xs bg-transparent border border-black"
        />
      </div>
      <div className="w-1/2">
        <h1>Github Link</h1>
        <input
          onChange={handleChange}
          type="text"
          name="githubLink"
          className="w-full outline-none p-1 text-xs bg-transparent border border-black"
        />
      </div>

      <div className="flex space-x-2">
        <ProjectImageBtn handleUpload={handleUpload} />
        {image && (
          <div className="flex space-x-2 items-center">
            <img
              src={image}
              alt=""
              className="w-52 h-10 border border-black overflow-hidden"
            />
            <p className="text-sm">preview</p>
          </div>
        )}
      </div>
      <div className="space-x-2">
        <button
          onClick={handleProjectUpload}
          className="outline-none p-2 w-40 border text-black border-black text-xs digital-text hover:bg-white/70 duration-500"
        >
          submit
        </button>
        <button
          onClick={() => adminCounter(1)}
          className="outline-none p-2 w-40 border text-black border-black text-xs digital-text hover:bg-white/70 duration-500"
        >
          back
        </button>
      </div>
    </div>
  );
};

export default NewProject;
