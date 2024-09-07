import { useTranslation } from "react-i18next";
import { Key } from 'iconsax-react';
import InputComponent from "../components/InputComponent";
import { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { signIn } from "../utils/authentication";

function Password(props) {

  const { t } = useTranslation();

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChangePasswordHandler = (event) => {
    setPasswordError('');
    setPassword(event.target.value);
  }

  const onCheckPassword = () => {
    signIn(password).then(() => {
      props.onAuthenticated();
    })
    .catch((error) => {
      console.log("error", error.code);
      if (error.code.includes('invalid')) setPasswordError(t('AUTHORIZATION.ERROR_400'));
      else setPasswordError(t('AUTHORIZATION.ERROR_500'));
    })
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white shadow-md p-16 flex flex-col items-center gap-8 max-w-xl w-full text-center sm:px-8">
        <div>
          <Key size={48} color='rgb(var(--blue))' />
        </div>
        <div>
          <div className="font-semibold text-xl">
            {t('AUTHORIZATION.TITLE')}
          </div>
          <div>
            {t('AUTHORIZATION.DESCRIPTION')}
          </div>
        </div>
        <InputComponent
          placeholder={t('AUTHORIZATION.PWD_PLACEHOLDER')}
          value={password}
          onChange={onChangePasswordHandler}
          errorMessage={passwordError}
          style={`border-blue/70`}
        />
        <ButtonComponent
          style={`bg-blue disabled:bg-blue/50 text-white font-semibold`}
          text={t('AUTHORIZATION.CONTINUE')}
          disabled={password === '' || passwordError !== ''}
          onClick={onCheckPassword}
        />
      </div>
    </div>
  )
}

export default Password;