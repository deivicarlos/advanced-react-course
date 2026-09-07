import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="flex flex-1 h-full w-full justify-center items-center bg-linear-to-r from-blue-400 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <Calculator />
    </div>
  );
}

export default App;
