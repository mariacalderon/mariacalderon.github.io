import { useTranslation } from "react-i18next";

const ProjectFooter = () => {

  const { t } = useTranslation();

  return (
    <div className="w-full bg-light-orange py-24 px-72 flex justify-center items-center">
      <div className="text-3xl font-bold underline">
        {t('PROJECT_COMMON.FOOTER')}
      </div>
    </div>
  )
}

export default ProjectFooter;