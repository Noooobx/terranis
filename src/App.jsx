
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import ParticlesComponent from "./components/ParticlesComponent";

function App() {
  return (
    <div className="app-container h-auto flex gap-4 flex-col justify-between items-center  text-white">
      <Navbar />
      <ParticlesComponent />
      <Homepage />
    </div>
  );
}

export default App;
