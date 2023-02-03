import React, { useState } from 'react';
import LoginService from '../../../services/security/LoginService';
import LoginLayout from '../components/LoginLayout';
import MenuLayout from '../../menu/component/MenuLayout';

const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const login = (data) => {
    setIsLoading(true);
    LoginService.post(data)
      .then((response) => {
        // handle success
        if (response.status === "error") {
          setIsLoading(false);
          alert(response.message);
          } else {
            setIsLoading(false);
          setIsLoginSuccess(true);
          }
          
          })
      .catch((error) => {
        // handle error
        setIsLoginSuccess(false);
        setIsLoading(false);
        alert("Ha ocurrido un error al iniciar sesión");
      });
  };

  return (
    <div>
    {isLoading
    ? <p>Loading...</p>
    : isLoginSuccess
    ? <MenuLayout />
    : errorMessage !== ""
    ? <p>{errorMessage}</p>
    : <LoginLayout login={login} />
    }
    </div>
    );
};


export default LoginContainer;
