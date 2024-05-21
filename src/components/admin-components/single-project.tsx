interface SPProps{
title: String,
}

const SingleProject: React.FC<SPProps> = ({title}) => {
    return ( 
        <div className="w-full flex items-center justify-between">
        <h1 className="">{title}</h1>
        <div className="space-x-2">
      <button className="border border-black text-xs p-1 w-24 hover:bg-white/70 duration-500">edit</button>
      <button className="border border-black text-xs p-1 w-24 hover:bg-white/70 duration-500">delete</button>
        </div>
     </div>
     );
}
 
export default SingleProject;