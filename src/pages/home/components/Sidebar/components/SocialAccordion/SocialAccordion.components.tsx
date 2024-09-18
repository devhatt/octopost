import { ReactNode } from 'react';

import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import { AccountCard } from '~components/AccountCard/AccountCard';

import scss from './SocialAccordion.module.scss';

import {
  AccordionContentProps,
  AccountQuantityProps,
} from './SocialAccordion.type';

export function AccountQuantity({
  accountQuantity,
}: AccountQuantityProps): ReactNode {
  return <span className={scss.accountQuantity}>{accountQuantity}+</span>;
}

export function AccordionContent({
  accounts,
  enableChange,
  favoriteChange,
}: AccordionContentProps): ReactNode {
  return (
    <ul className={scss.accordionItem} role="listitem">
      {accounts.map((account: StoreAccount) => (
        <li key={account.id}>
          <AccountCard
            avatarURL={account.avatar}
            invalid={!account.valid}
            isEnabled={account.valid}
            onEnableChange={(enable) => enableChange(enable, account)}
            onFavoriteChange={(isFavorited) =>
              favoriteChange(isFavorited, account)
            }
            username={account.userName}
          />
        </li>
      ))}
    </ul>
  );
}
