import { useEffect, useRef } from "react";

interface ImgProps{
  handleUpload: (url: string) => void
}

const ProjectImageBtn: React.FC<ImgProps> = ({handleUpload}) => {
  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
      },
      function (error: any, result: any) {
        if (!error && result.event == "success") {
          handleUpload(result.info.secure_url);
        }
      }
    );
  }, []);

  return (
    <button
      className="outline-none p-2 h-10 border text-black border-black text-xs digital-text hover:bg-white/70 duration-500"
      onClick={() => widgetRef.current.open()}
    >
      upload image
    </button>
  );
};

export default ProjectImageBtn;
