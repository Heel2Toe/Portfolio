import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Remote from "./components/remote";
import toast, { Toaster } from "react-hot-toast";
import { useControl } from "./hooks/useControl";
import Television from "./components/tv";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const { channel } = useControl();
  const [warmedUp, setWarmedUp] = useState(false);

  useEffect(() => {
    const warmup = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/warmup`);
        setTimeout(() => {
          setWarmedUp(true);
        }, 2000);
      } catch (err) {
        console.log(err);
        toast.error("Internal server error");
      } 
    };
    warmup();
  }, []);

  return (
    <div className="relative flex justify-between items-center p-4 bg-stone-950 h-full">
      <Toaster/>
      <Router>
        <Remote warmedUp={warmedUp}/>
        <Television channel={channel} warmedUp={warmedUp}/>
      </Router>
    </div>
  );
}

export default App;
