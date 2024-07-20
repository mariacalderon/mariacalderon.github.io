import HeaderSection from "./HeaderSection";
import { NAME, NAV_SECTIONS, PROJECTS } from "../utils/constants";
import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  const checkIfIsProjectPath = (currentPath) => {
    return PROJECTS.some(project => currentPath.includes(project));
  };

  const checkHeaderLogo = useCallback(() => {
    const currentPath = window.location.pathname;
    if (checkIfIsProjectPath(currentPath)) {
      const projectName = currentPath.split('/')[1];
      return <img src={`/assets/icons/${projectName}.png`} alt={`${projectName}-logo`} />
    } else {
      return NAME;
    }
  }, []);

  useEffect(() => {
    checkHeaderLogo();
  }, [location, checkHeaderLogo]);

  return (
    <div className="fixed top-8 left-12 right-12 bg-white h-fit py-5 px-7 rounded-lg shadow-lg flex flex-row justify-between items-center z-40">
      <div className="font-bold">
        {checkHeaderLogo()}
      </div>
      <div className="flex flex-row">
        {
          NAV_SECTIONS.map((section) => {
            return (
              <HeaderSection key={section.id} title={section.title} url={section.url} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Header;