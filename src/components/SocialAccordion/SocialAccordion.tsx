import ToggleSocialMedia from '../ToggleSocialMedia/ToggleSocialMedia';

import scss from './SocialAccordion.module.scss';

import test from '../../../assets/logo.png';

import { ISocialAccordion } from './SocialAccordion.type';

function SocialAccordion(props: ISocialAccordion) {
  return (
    <div className={scss.wrapper}>
      <button>
        <header className={scss.header}>
          <div className={scss.socialInfo}>
            <img className={scss.icon} src={test} />
            <p>{props.socialMediaName}</p>
          </div>

          <div className={scss.accordionInfo}>
            <span>{props.accountList.length}+</span>
            <p>open</p>
          </div>
        </header>
      </button>
      <ul className={scss.list}>
        {props.accountList.map((accounts, index) => (
          <li key={index}>
            <ToggleSocialMedia
              accountName={accounts.username}
              accountImage={accounts.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialAccordion;
