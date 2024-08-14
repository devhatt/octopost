import { ReactNode } from 'react';

import Button from '~components/Button/Button.tsx';

import scss from './SocialMediaForm.module.scss';

import { SocialMediaFormProps } from './SocialMediaForm.types';

export function ConnectAccountButton({
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

export function ConnectAccountButtonDisabled(): ReactNode {
  return (
    <Button className={scss.socialButton} disabled variant="outlined">
      Connect Account
    </Button>
  );
}

export function ConnectGroupButton({
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
