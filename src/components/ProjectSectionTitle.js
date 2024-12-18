import { useTranslation } from "react-i18next";
import { BLUE_H3, H1, H2, H2_BUBBLE, H2_UNDERLINE, H3, H4, SUBTITLE } from "../utils/constants";

const ProjectSectionTitle = (props) => {

  const { t } = useTranslation();

  const getTitleType = () => {
    switch(props.type) {
      case H1:
        return 'font-bold text-5xl pb-8 pt-2 sm:text-4xl';
      case H2:
        return 'font-bold text-body text-3xl pb-1 sm:text-2xl';
      case H3:
        return 'font-bold text-2xl pb-4 sm:text-xl';
      case H4:
        return 'font-bold text-xl sm:text-lg';
      case SUBTITLE:
        return 'inline font-medium text-xl sm:text-lg';
      case BLUE_H3:
        return 'font-bold text-lg text-blue pb-4';
      case H2_BUBBLE:
        return 'w-fit font-semibold text-3xl text-blue bg-light-gray rounded-xl p-3 sm:text-2xl';
      case H2_UNDERLINE:
        return 'w-full font-bold text-body text-3xl pb-2 border-b-2 border-body sm:text-2xl';
      default:
        return 'font-bold text-md';
    }
  }

  return (
    <div className={`${getTitleType()} ${props.styling}`}>
      {t(props.title, props.variables)}
    </div>
  )
}

export default ProjectSectionTitle;