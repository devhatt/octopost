import { ReactNode } from 'react';

import scss from './SocialAccordion.module.scss';

import { AccountQuantityProps } from './SocialAccordion.type';

export function AccountQuantity({
  accountQuantity,
}: AccountQuantityProps): ReactNode {
  return <span className={scss.accountQuantity}>{accountQuantity}+</span>;
}
