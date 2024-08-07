import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from '../SocialMediaList.module.scss';

function ConnectAccountButtonDisabled(): ReactNode {
  return (
    <Button className={scss.socialButton} disabled variant="outlined">
      Connect Account
    </Button>
  );
}

export default ConnectAccountButtonDisabled;
