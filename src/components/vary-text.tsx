import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
    'Communicating with the server...',
    'This is taking really long..I use a free tier server :(',
    'Just a little bit longer now...Please wait.'
]

const VaryText = () => {

 const [text, setText] = useState(0);    

    useEffect(() => {
        setTimeout(()=>{
            if(text != 2){
                setText(text+1);
            }
        },15000)
    }, [text]);


    return ( 
        <motion.p 
        key={text} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
        className={classNames(`font2 font-bold`)}>{texts[text]}</motion.p>
     );
}
 
export default VaryText;