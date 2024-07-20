import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HeaderSection = (props) => {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const isCurrentPath = () => {
    const currentPath = window.location.pathname;
    return currentPath === props.url ? 'font-extrabold' : 'font-semibold';
  }

  const navigateTo = (url) => {
    navigate(url);
  };

  return (
    <div className={`pl-7 cursor-pointer ${isCurrentPath()}`} onClick={() => {navigateTo(props.url)}}>
      {t(props.title)}
    </div>
  )
}

export default HeaderSection;