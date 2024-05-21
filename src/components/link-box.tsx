import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaFileAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const LinkBox = () => {
  const onCopy = () => {
    navigator.clipboard.writeText(`+919074407413`);
    toast.success("Phone number copied");
  };

  const resumeDownload = () => {
    const resumeUrl = './NiranjanResume.pdf';

    const temp = document.createElement('a');
    temp.href = resumeUrl;
    temp.setAttribute('download', 'NiranjanResume.pdf');
    temp.setAttribute('target', '_blank');

    document.body.appendChild(temp);
    temp.click();
    document.body.removeChild(temp);
  }

  const resumeToast = () => {
    toast((t) => (
      <div className="flex flex-col font1 text-white space-y-3 p-2">
        <p className="text-3xl">DOWNLOAD RESUME ?</p>
        <div className="flex justify-center space-x-2">
        <button 
        className="border w-20 p-2 text-xl bg-white/90 text-black hover:border-green-300 hover:text-green-300 duration-300" 
        onClick={() => { toast.dismiss(t.id); resumeDownload(); }}>Yes</button>
        <button className="border w-20 p-2 text-xl hover:border-green-300 hover:text-green-300 duration-300" onClick={() => toast.dismiss(t.id)}>No</button>
        </div>
      </div>
    ),{
      duration: Infinity,
      style: { backgroundColor: 'black', borderRadius: 0 }
    });
  }

  return (
    
    <div className=" border items-center w-64 p-5 rounded-md flex justify-between self-end">
      <motion.div
        initial={{ y: 75, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.1 }}
        title="gmail"
      >
        <Link
          to={
            "https://mail.google.com/mail/?view=cm&fs=1&to=npn153624@gmail.com"
          }
          target="_blank"
        >
          <SiGmail />
        </Link>
      </motion.div>

      <motion.div
      title="github"
        initial={{ y: 75, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.25 }}
      >
        <Link to={"https://github.com/Heel2Toe"} target="_blank">
          <FaGithub />
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: 75, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.4 }}
        title="linkedin"
      >
        <Link
          to={"https://www.linkedin.com/in/niranjan-p-n-81b74128b/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: 75, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.55 }}
        title="phone"
      >
        <FaPhoneAlt  onClick={onCopy} className="cursor-pointer"/>
      </motion.div>

      <motion.div
        initial={{ y: 75, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.55 }}
        title="resume"
      >
        <FaFileAlt  onClick={resumeToast} className="cursor-pointer"/>
      </motion.div>
    </div>
  );
};

export default LinkBox;