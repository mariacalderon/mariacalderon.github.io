import { CONTACT_EMAIL, CONTACT_TEL, LINKEDIN_LINK, NAME } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

  const openWindow = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-primary w-screen h-fit py-16 px-16 flex flex-row justify-between items-center z-40 text-2xl">
      <div className="flex font-bold">
        {NAME}
      </div>
      <div className="flex flex-col text-center gap-2 font-medium">
        <div className="cursor-pointer" onClick={() => {
          openWindow(`mailto: ${CONTACT_EMAIL}`);
        }}>
          {CONTACT_EMAIL}
        </div>
        <div>
          {CONTACT_TEL}
        </div>
      </div>
      <div className="flex flex-row gap-1 cursor-pointer" onClick={() => {
        openWindow(LINKEDIN_LINK);
      }}>
        <div className="text-xl font-medium">
          Linked
        </div>
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" width={16}/>
      </div>
    </div>
  )
}

export default Footer;