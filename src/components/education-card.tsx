interface EducationProps{
    institution: string,
    description: string,
    duration: string,
    keyValue?: string
}

const EducationCard: React.FC<EducationProps> = ({
    institution,
    description,
    duration,
    keyValue
}) => {
    
    return ( 
        <div
        className="relative w-[90%] p-8 space-y-4 rounded-es-3xl border flex flex-col items-center">
            <div className="absolute bg-green-900 text-white font2 font-extrabold -top-1 -right-1 w-40 py-2  flex justify-center">
              {duration}
            </div>
          <h1 
          className="self-start font2 text-3xl px-2 p-1 font-bold border bg-white/80 text-black ">
            {institution.toUpperCase()}
          </h1>
          <p>{description}</p>
          {keyValue && <p className="self-end p-1 text-md border bg-white/80 text-green-900 font-bold">
          {keyValue}
        </p>}
        </div>
     );
}
 
export default EducationCard;