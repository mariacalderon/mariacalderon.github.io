import { Routes, Route, useLocation } from "react-router-dom";
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
import AyobaMusic from "./pages/AyobaMusic";
import Newitts from "./pages/Newitts";
import AyobaGeneral from "./pages/AyobaGeneral";
import DigitalDrams from "./pages/DigitalDrams";
import B2bToolIpad from "./pages/B2bToolIpad";
import AvorisGeneral from "./pages/AvorisGeneral";
import AvorisDesignSystem from "./pages/AvorisDesignSystem";
import AvorisFlights from "./pages/AvorisFlights";
import ProtectedProject, { lockProtectedProjects, PROTECTED_SECTION_PATHS } from "./components/ProtectedProject";
import OpticaUniversitaria from "./pages/OpticaUniversitaria";
import NotFound from "./pages/NotFound";

function App() {

  const [showFab, setShowFab] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (!PROTECTED_SECTION_PATHS.some((path) => location.pathname.startsWith(path))) lockProtectedProjects();
  }, [location.pathname]);

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
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutme />} />
          <Route path='/ayoba' element={<AyobaGeneral />} />
          <Route path='/ayoba/messaging' element={<AyobaMessaging />} />
          <Route path='/ayoba/profile' element={<AyobaProfile />} />
          <Route path='/ayoba/games' element={<AyobaGames />} />
          <Route path='/ayoba/music' element={<AyobaMusic />} />
          <Route path='/avoris' element={<ProtectedProject bkgColor='bg-avoris-cream'><AvorisGeneral /></ProtectedProject>} />
          <Route path='/avoris/design-system' element={<ProtectedProject bkgColor='bg-avoris-cream'><AvorisDesignSystem /></ProtectedProject>} />
          {
            // Work in progress: only reachable while developing locally, hidden on the published site
            process.env.NODE_ENV === 'development' &&
              <Route path='/avoris/flights' element={<ProtectedProject bkgColor='bg-avoris-cream'><AvorisFlights /></ProtectedProject>} />
          }
          <Route path='/digital-drams' element={<ProtectedProject bkgColor='bg-[#131313]'><DigitalDrams /></ProtectedProject>} />
          <Route path='/b2b-tool-ipad' element={<ProtectedProject bkgColor='bg-[#131313]'><B2bToolIpad /></ProtectedProject>} />
          <Route path='/newitts' element={<Newitts />} />
          <Route path='/optica-universitaria' element={<OpticaUniversitaria />} />
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
