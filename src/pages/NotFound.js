import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import ButtonComponent from "../components/ButtonComponent";

const NotFound = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center py-64'>
      <div className='py-16'>
        <div className="text-5xl">
          {t('NOT_FOUND.TITLE')}
        </div>
      </div>
      <div>
        <ButtonComponent 
          style={`bg-white border-2 border-blue hover:bg-blue hover:text-white text-black font-semibold`}
          text={t('NOT_FOUND.BACK_HOME')}
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
    </div>
  )
};

export default NotFound;