import { ReactNode } from 'react';

import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import SocialAccordion from './components/SocialAccordion/SocialAccordion';

import scss from './Sidebar.module.scss';

import { FilteredAccountsProps } from './Sidebar.types';

export function FilteredAccounts(props: FilteredAccountsProps): ReactNode {
  const { accounts, socialMedias } = useSocialMediaStore();
  return (
    <div className={scss.accordionContainer}>
      <SocialAccordion
        accounts={accounts.favorites}
        error={false}
        key="FavoriteAccounts"
        socialMediaId="FavoriteAccounts"
        title="Favorite Accounts"
      />
      {props.socialMedia.map(
        ({ socialMediaAccounts, socialMediaId }): ReactNode => (
          <SocialAccordion
            accounts={socialMediaAccounts}
            error={false}
            key={socialMediaId}
            socialMediaId={socialMediaId}
            title={socialMedias.get(socialMediaId)?.name}
          />
        )
      )}
    </div>
  );
}

export function EmptyResult(): ReactNode {
  return <p> Não há resultados para essa busca</p>;
}
