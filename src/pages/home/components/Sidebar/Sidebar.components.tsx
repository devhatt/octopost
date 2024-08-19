import { ReactNode } from 'react';

import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import SocialAccordion from './components/SocialAccordion/SocialAccordion';

import scss from './Sidebar.module.scss';

import { FilteredAccountsProps } from './Sidebar.types';

export function FilteredAccounts(props: FilteredAccountsProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();

  const socialMediasSortered = props.socialMedia.sort((a, b) => {
    if (a.socialMediaId === 'FAVORITE_ACCOUNTS') return -1;
    if (b.socialMediaId === 'FAVORITE_ACCOUNTS') return 1;
    return 0;
  });

  return (
    <div className={scss.accordionContainer}>
      {socialMediasSortered.map(
        ({ socialMediaAccounts, socialMediaId }): ReactNode => (
          <SocialAccordion
            accounts={socialMediaAccounts}
            error={false}
            key={socialMediaId}
            socialMediaId={socialMediaId}
            title={socialMedias.get(socialMediaId)?.name as string}
          />
        )
      )}
    </div>
  );
}

export function EmptyResult(): ReactNode {
  return <p> Não há resultados para essa busca</p>;
}
