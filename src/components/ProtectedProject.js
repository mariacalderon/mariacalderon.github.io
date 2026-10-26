import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { motion } from "framer-motion";
import Password from "../pages/Password";

// Without Firebase keys (local dev without .env.local) the pages stay open; production builds always ask.
const isLocalWithoutFirebase = process.env.NODE_ENV === 'development' && !process.env.REACT_APP_APIKEY;

// Shows the page only after the password was entered; Firebase keeps the session, so it is asked once per browser.
const ProtectedProject = (props) => {

  const { t } = useTranslation();

  const [status, setStatus] = useState(isLocalWithoutFirebase ? 'open' : 'checking');

  useEffect(() => {
    if (isLocalWithoutFirebase) return;
    return onAuthStateChanged(getAuth(), (user) => {
      setStatus(user ? 'open' : 'locked');
    });
  }, []);

  if (status === 'open') return props.children;

  return (
    <div className={`min-h-screen ${props.bkgColor ?? 'bg-white'}`}>
      {
        status === 'locked' &&
          <motion.div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-6 p-8 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-full">
              <Password onAuthenticated={() => setStatus('open')} />
            </div>
            <Link className="text-white font-semibold" to='/'>
              {t('AUTHORIZATION.BACK')}
            </Link>
          </motion.div>
      }
    </div>
  )
}

export default ProtectedProject;
