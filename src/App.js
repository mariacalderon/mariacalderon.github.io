import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="font-gilroy flex min-h-screen flex-col items-center justify-between p-24">
      <Routes>
        <Route path='*' element={<Homepage />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
