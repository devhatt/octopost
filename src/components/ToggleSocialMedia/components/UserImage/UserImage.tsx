import { useMemo } from 'react';

import scss from './UserImage.module.scss';

import { IUserImage } from './UserImage.type';

function UserImage(props: IUserImage) {
  const getInitialLetter = useMemo(() => {
    return props.accountName
      .split(' ')
      .map((letters) => letters[0].toLocaleUpperCase());
  }, [props.accountName]);

  return props.image !== '' ? (
    <img className={scss.userImage} src={props.image} alt="profile user" />
  ) : (
    <div className={scss.userImagePlaceholder}>
      <span className={scss.initialLetter}>{getInitialLetter[0]}</span>
    </div>
  );
}

export default UserImage;
