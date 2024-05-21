import classNames from "classnames";

const TvGrain = ({loading}:{loading:boolean}) => {
  
    return ( 
        <div className={classNames(`tvStatic top-0 left-0 absolute h-full w-full z-20`, 
            loading ? 'opacity-100' : 'opacity-[0.1]'
        )}/>
     );
}
 
export default TvGrain;