import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Aboutme from "./pages/Aboutme";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-gilroy flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div>
        <Routes>
          <Route path='*' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutme />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
