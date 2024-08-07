import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from '../SocialMediaList.module.scss';

import { SocialMediaFormProps } from '../SocialMediaForm.types';

function ConnectGroupButton({
  onHandleToggleModal,
}: SocialMediaFormProps): ReactNode {
  return (
    <Button
      className={scss.socialButton}
      onClick={onHandleToggleModal}
      variant="container"
    >
      Connect Group
    </Button>
  );
}

export default ConnectGroupButton;
