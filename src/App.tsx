import { useState } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Remote from "./components/remote";
import { Toaster } from "react-hot-toast";
import { useControl } from "./hooks/useControl";
import Television from "./components/tv";

function App() {
  const [loading, setLoading] = useState(false);
  const { channel } = useControl();



  return (
    <div className="relative flex justify-between items-center p-4 bg-stone-950 h-full">
      <Toaster/>
      <Router>
        <Remote />
        <Television channel={channel}/>
      </Router>
    </div>
  );
}

export default App;
