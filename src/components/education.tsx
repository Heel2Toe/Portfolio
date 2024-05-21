import { useEffect } from "react";
import { useControl } from "../hooks/useControl";
import EducationCard from "./education-card";

const Education = () => {
  const { setLoading, setError } = useControl();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(false);
    }, 300);
  }, []);

  return (
    <div className="h-full w-full p-10 text-white/90 flex flex-col space-y-10 hide-scrollbar overflow-y-scroll">
      <h1 className="text-8xl font1">Education</h1>
      <EducationCard
        institution="Techmindz"
        duration="2023 - 2023"
        description="
        I joined Techmindz to kickstart my journey in web development. The course predominantly focused on the MERN stack, which provided me with a comprehensive understanding of various aspects of web development. 
        I gained valuable insights and practical knowledge that equipped me with the skills needed to thrive in the field."
      />

      <EducationCard
        institution="School of technology and applied science"
        duration="2020 - 2023"
        description="I chose School of technology and applied science, affiliated with Mahathma Gandhi University, for my college education. Pursuing a Bachelor of Computer Applications (BCA) course, 
        I delved into various foundational aspects of computer applications, including networking, programming, operating systems, and web development."
        keyValue="CGPA : 7.19"
      />
    </div>
  );
};

export default Education;
