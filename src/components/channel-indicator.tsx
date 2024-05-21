import classNames from "classnames";
import { useEffect, useState } from "react";

const ChannelIndicator = ({channel}:{channel:number}) => {
    
    const [opacity, setOpacity] = useState(false);

    useEffect(() => {
        setOpacity(true);
        setTimeout(()=>{
         setOpacity(false);
        },1500)
    }, [channel]);

    return ( 
        <div className={classNames(`absolute pointer-events-none top-4 right-4 h-12 w-24 bg-black flex justify-center items-center z-20 duration-700`,
            opacity ? 'opacity-100' : 'opacity-0'
        )}>
           <p className="text-white font-bold text-xl font1 px-2">00{channel+1}</p>
        </div>
     );
}
 
export default ChannelIndicator;