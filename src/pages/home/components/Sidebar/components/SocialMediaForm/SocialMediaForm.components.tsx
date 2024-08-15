import { ReactNode } from 'react';

import Button from '~components/Button/Button.tsx';

import scss from './SocialMediaForm.module.scss';

import { SocialMediaFormProps } from './SocialMediaForm.types';

export function ConnectAccountButton({
  onOpenModal,
}: SocialMediaFormProps): ReactNode {
  return (
    <Button
      className={scss.socialButton}
      onClick={onOpenModal}
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
  onOpenModal,
}: SocialMediaFormProps): ReactNode {
  return (
    <Button
      className={scss.socialButton}
      onClick={onOpenModal}
      variant="container"
    >
      Connect Group
    </Button>
  );
}
