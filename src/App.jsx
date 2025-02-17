import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import ParticlesComponent from "./components/ParticlesComponent";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container h-auto flex gap-4 flex-col font-sophia justify-between items-center text-white">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <ParticlesComponent />
          <Homepage />
        </>
      )}
    </div>
  );
}

export default App;
