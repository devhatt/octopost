import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from '../SocialMediaList.module.scss';

import { SocialMediaFormProps } from '../SocialMediaForm.types';

function ConnectAccountButton({
  onHandleToggleModal,
}: SocialMediaFormProps): ReactNode {
  return (
    <Button
      className={scss.socialButton}
      onClick={onHandleToggleModal}
      variant="outlined"
    >
      Connect Account
    </Button>
  );
}

export default ConnectAccountButton;
