import { motion } from "framer-motion";

interface Props{
    imageLink : string,
    name: string
}

const Polaroid: React.FC<Props> = ({imageLink, name}) => {
    
    return ( 
        <motion.div 
        initial={{
            translateX: '-50%',
            rotate: 0
        }}
        animate={{
            translateX: '0%',
            rotate: 6
        }}
        transition={{
        
         type: 'inertia',
         velocity: 125,
            rotate: {
                delay: 0.2, 
                duration: 0.5,
              },
        }}
        className="w-96  bg-white">

        <motion.div 
        initial={{
            translateX: '-50%',
            rotate: 0
        }}
        animate={{
            rotate: -12,
            translateX: '0%',
        }}
        transition={{
         translateX:{
            duration: 0.6
         },
            rotate: {
                delay: 0.2, 
                duration: 0.5,
              },
        }}
       
        className="w-96 h-80 p-4 bg-white flex flex-col items-center border border-black">
          <img src={imageLink} className="w-full h-full border-2 border-black" />
          <div className="w-full h-20 vc-text  flex items-center">
              <h1 className="font-bold text-4xl">{name}.</h1>
          </div>
        </motion.div>
        </motion.div>
     );
}
 
export default Polaroid;