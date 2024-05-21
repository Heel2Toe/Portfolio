import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAdmin } from "../../hooks/useAdmin";

const AdminLogin= () => {
  const [adminInfo, setAdminInfo] = useState({ username: "", password: "" });
  const { adminCounter } = useAdmin()

  const handleAdminInfo = (e: any) => {
    const textbox = e.target.name;
    setAdminInfo((prev) => ({
      ...prev,
      [textbox]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!adminInfo.username || !adminInfo.password) {
      return toast.error("Enter credentials");
    }
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/adminLogin`, {
        username: adminInfo.username,
        password: adminInfo.password,
      });
      adminCounter(1);
      
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data || 'Something went wrong');
    }
  };

  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <h1>Enter credentials</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleAdminInfo}
        className="w-48 p-1 text-xs bg-transparent border border-black placeholder:text-gray-800 outline-none"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleAdminInfo}
        className="w-48 p-1 text-xs bg-transparent border border-black placeholder:text-gray-800 outline-none"
      />
      <button
        onClick={handleSubmit}
        className="p-1 outline-none border border-black w-48 text-xs hover:bg-white/70 duration-500"
      >
        submit
      </button>
    </div>
  );
};

export default AdminLogin;
