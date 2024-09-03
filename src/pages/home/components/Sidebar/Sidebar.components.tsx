import { ReactNode } from 'react';

import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import SocialAccordion from './components/SocialAccordion/SocialAccordion';

import scss from './Sidebar.module.scss';

import { FilteredAccountsProps } from './Sidebar.types';

export function FilteredAccounts(props: FilteredAccountsProps): ReactNode {
  const { favoriteAccounts, socialMedias } = useSocialMediaStore();

  return (
    <div className={scss.accordionContainer}>
      <SocialAccordion
        accounts={favoriteAccounts}
        error={false}
        title="Favorite Accounts"
      />
      {props.socialMedia.map(
        ({ socialMediaAccounts, socialMediaId }): ReactNode => {
          const socialMedia = socialMedias.get(socialMediaId);

          if (socialMedia) {
            return (
              <SocialAccordion
                accounts={socialMediaAccounts}
                error={false}
                key={socialMedia.id}
                title={socialMedia.name}
              />
            );
          }
        }
      )}
    </div>
  );
}

export function EmptyResult(): ReactNode {
  return <p> Não há resultados para essa busca</p>;
}
