import { useEffect } from "react";
import LinkBox from "./link-box";
import { useControl } from "../hooks/useControl";
import { motion } from "framer-motion";

const Desc = () => {
  const { setLoading, setError } = useControl();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(false);
    }, 300);
  }, []);

  return (
    <div className=" h-full w-full bg-green-900 p-10 myFont text-white/90 space-y-8  flex flex-col">
      <div className="flex items-center text-8xl font1">
        <h1>HELLO</h1>
        <h1 className="p-1 border rounded-ee-full">IM NIRANJAN</h1>
      </div>

      <motion.p
      initial={{
        opacity: 0,
        translateX: '-2%'
      }}
      animate={{
        opacity: 1,
        translateX: '0%'
      }}
      transition={{
        delay: .4,
        stiffness: 100,
        duration: 0.6,
      }}
      >
        Hey there! I'm a passionate software developer, and my specialty is
        building websites. I love exploring new technologies I create websites
        that not only look awesome but also run like well-oiled machines, always
        designing with scalability in mind.
      </motion.p>

      <motion.p 
            initial={{
              opacity: 0,
              translateX: '2%'
            }}
            animate={{
              opacity: 1,
              translateX: '0%'
            }}
            transition={{
              delay: .4,
              stiffness: 100,
              duration: 0.6
            }}
      className="w-[95%] self-end">
        What gets me out of bed every morning? Challenges. Yup, you heard that
        right! I thrive on them. Whether it's tackling a complex feature or
        optimizing performance, I'm all in. And when it comes to writing code,
        I'm all about keeping it{" "}
        <span className="p-1 border bg-white/80 text-black font-bold">
          clean and organised.
        </span>
         {" "}Why? Because clean code isn't just easier to understand – it's a breeze
        to maintain too.
      </motion.p>
      <motion.p 
            initial={{
              opacity: 0,
              translateX: '-2%'
            }}
            animate={{
              opacity: 1,
              translateX: '0%'
            }}
            transition={{
              delay: .4,
              stiffness: 50,
              duration: 0.6
            }}
      >
        So, if you're looking for someone to help you bring your ideas to life
        online, you're in the right place. Let's work together to build
        something amazing! All my contact info , including my resume can be
        found below. Cheers !
      </motion.p>

      <div className="self-end flex items-center space-x-4">
        <h1 className="text-4xl font1">CONTACT</h1>
        <LinkBox />
      </div>
    </div>
  );
};

export default Desc;
