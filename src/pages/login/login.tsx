import { ReactNode } from 'react';

import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';

import scss from './login.module.scss';

import Logo from './assets/logo.svg';
import Octopus from './assets/OctopusImg.svg';

function Login(): ReactNode {
  return (
    <div className={scss.wrapper}>
      {/*Parte d cima*/}
      <div className={scss.topSection}>
        <div className={scss.headerLogin}>
          <div>
            <img alt="Icone de adicionar uma tag" src={Logo} />
          </div>
          <Button
            className={scss.buttonSignUp}
            type="button"
            variant="outlined"
          >
            Sign Up
          </Button>
        </div>
        <div className={scss.heroLogin}>
          <div className={scss.description}>
            <h1 className={scss.mainTitle}>Wellcome back</h1>
            <p className={scss.statusText}>
              To keep connected with us please login with your personal info
            </p>
          </div>
          <div className={scss.octopusContainer}>
            <div className={scss.octopusImg}>
              <img alt="Icone de adicionar uma tag" src={Octopus} />
            </div>
          </div>
        </div>
      </div>
      {/*Parte d baixo*/}
      <div className={scss.bottomSection}>
        <form className={scss.formContainer}>
          <div className={scss.inputGroupWrapper}>
            <div className={scss.inputContainer}>
              <input
                className={scss.inputField}
                placeholder="example@gmail.com"
                type="email"
              />
              <Icon className={scss.inputIcon} icon="email" size={20} />
            </div>
            <div className={scss.inputContainer}>
              <input
                className={scss.inputField}
                placeholder="*************"
                type="password"
              />
              <Icon className={scss.inputIcon} icon="email" size={20} />
            </div>
            <Button
              className={scss.buttonLogin}
              type="button"
              variant="outlined"
            >
              Login
            </Button>
          </div>
        </form>
        <p className={scss.selectSocialMediaText}>or continue with</p>
        <ul className={scss.socialMediaGroup}>
          <li className={scss.socialMediaOption}>
            <Icon className={scss.inputIcon} icon="twitter" size={20} />
          </li>
          <li className={scss.socialMediaOption}>
            <Icon className={scss.inputIcon} icon="tiktok" size={20} />
          </li>
          <li className={scss.socialMediaOption}>
            <Icon className={scss.inputIcon} icon="instagram" size={20} />
          </li>
        </ul>
        <div className={scss.footerLogin}>
          <a className={scss.forgotPasswordLink} href="/naoSei">
            Forgot Password
          </a>
          <p className={scss.signUpPrompt}>
            Dont have a account?{' '}
            <a className={scss.signUpLink} href="/naoSei">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
