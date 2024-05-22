import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import VaryText from "./vary-text";
import LoadingHeading from "./loading-heading";

const MainLoading = () => {
    return ( 
        <div className="h-full w-full p-10 bg-emerald-950 text-white/70 flex justify-center items-center">
            <div className="mb-20 flex flex-col justify-center items-center">
          <LoadingHeading/>
          <VaryText/>
          <motion.div 
          animate={{rotate: 360}}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 1
          }}
          className="mt-6">
            <AiOutlineLoading3Quarters className="text-2xl"/>
          </motion.div>
            </div>
        </div>
     );
}
 
export default MainLoading;