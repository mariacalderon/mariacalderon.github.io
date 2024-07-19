import HeaderSection from "./HeaderSection";
import { NAV_SECTIONS } from "../utils/constants";

const Header = () => {
  return (
    <div className="fixed top-8 left-12 right-12 bg-white h-fit py-5 px-7 rounded-lg shadow-lg flex flex-row justify-between z-40">
      <div className="font-bold">
        Maria Granda
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