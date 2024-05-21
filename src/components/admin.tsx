import { useAdmin } from "../hooks/useAdmin";
import AdminLogin from "./admin-components/admin-login";
import ProjectDisplayAdmin from "./admin-components/project-display-admin";
import NewProject from "./admin-components/new-project";

const Admin = () => {

    const { counterReset, admin } = useAdmin();

    return ( 
        <div className="absolute digital-text top-0 left-0 z-10 rounded-t-md h-full w-full p-4 pt-10 bg-green-500">
            <button 
            onClick={counterReset}
            className="absolute top-2 right-2 outline-none border border-black text-xs p-3 px-4 hover:bg-white/70 duration-500">
                 exit admin
            </button>
            
          {admin == 0 && <AdminLogin/>}
          {admin == 1 && <ProjectDisplayAdmin/>}
          {admin == 2 && <NewProject/>}
        </div>
     );
}
 
export default Admin;