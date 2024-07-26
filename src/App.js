import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Aboutme from "./pages/Aboutme";
import Footer from "./components/Footer";
import AyobaMessaging from "./pages/AyobaMessaging";
import { useEffect, useState } from "react";
import { ArrowCircleUp } from "iconsax-react";
import { AnimatePresence, motion } from "framer-motion";
import AyobaProfile from "./pages/AyobaProfile";
import AyobaGames from "./pages/AyobaGames";

function App() {

  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 800) setShowFab(true);
      if (window.scrollY < 50) setShowFab(false);
    }
    return () => (window.onscroll = null);
  }, []);

  const returnToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="font-gilroy flex w-full min-h-screen flex-col items-center justify-between overflow-hidden">
      <Header />
      <div className="w-full">
        <Routes>
          <Route path='*' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutme />} />
          <Route path='/ayoba/messaging' element={<AyobaMessaging />} />
          <Route path='/ayoba/profile' element={<AyobaProfile />} />
          <Route path='/ayoba/games' element={<AyobaGames />} />
        </Routes>
      </div>
      <AnimatePresence>
      {
        showFab &&
          <motion.div
            className="fixed bottom-52 right-8 cursor-pointer z-50 sm:right-4 sm:bottom-10"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            onClick={() => {
              returnToTop()
            }}
          >
            <ArrowCircleUp size={64} color="rgb(var(--gray))" variant="Bulk" />
          </motion.div>
      }
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
