import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HeaderSection = (props) => {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const isSameURL = () => {
    return window.location.pathname === props.url;
  }

  const navigateTo = (url) => {
    navigate(url);
  };

  return (
    <div className={`pl-7 font-semibold cursor-pointer ${isSameURL() && 'font-extrabold'}`} onClick={() => {navigateTo(props.url)}}>
      {t(props.title)}
    </div>
  )
}

export default HeaderSection;