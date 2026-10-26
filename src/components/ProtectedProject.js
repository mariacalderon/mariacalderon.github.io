import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { motion } from "framer-motion";
import Password from "../pages/Password";

// Without Firebase keys (local dev without .env.local) the pages stay open; production builds always ask.
const isLocalWithoutFirebase = process.env.NODE_ENV === 'development' && !process.env.REACT_APP_APIKEY;

// Kept in memory only: the password is asked again on every reload and every time the
// protected section is opened again, but not when moving between its own pages.
let isUnlockedThisVisit = false;

export const PROTECTED_SECTION_PATH = '/avoris';

export const lockProtectedProjects = () => {
  isUnlockedThisVisit = false;
};

const ProtectedProject = (props) => {

  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(isLocalWithoutFirebase || isUnlockedThisVisit);

  const onAuthenticated = () => {
    isUnlockedThisVisit = true;
    setIsOpen(true);
    // The Firebase session is not needed after the check, so it is not kept in the browser.
    signOut(getAuth()).catch(() => {});
  };

  if (isOpen) return props.children;

  return (
    <div className={`min-h-screen ${props.bkgColor ?? 'bg-white'}`}>
      <motion.div
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-6 p-8 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-full">
          <Password onAuthenticated={onAuthenticated} />
        </div>
        <Link className="text-white font-semibold" to='/'>
          {t('AUTHORIZATION.BACK')}
        </Link>
      </motion.div>
    </div>
  )
}

export default ProtectedProject;
