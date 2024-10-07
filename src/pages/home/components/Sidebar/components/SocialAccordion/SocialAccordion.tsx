import { ReactNode, useState } from 'react';

import { usePostStore } from '~stores/usePostStore/usePostStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';
import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import Accordion from '~components/Accordion/Accordion';
import { AccountCard } from '~components/AccountCard/AccountCard';
import Icon from '~components/Icon/Icon';

import scss from './SocialAccordion.module.scss';

import iconPlaceholderForIcon from './assets/facebook.svg';

import { AccountQuantity, RenderError } from './SocialAccordion.components';
import { SocialAccordionProps } from './SocialAccordion.type';

function SocialAccordion(props: SocialAccordionProps): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const { favoriteAccount, socialMedias } = useSocialMediaStore();
  const { add, posts, remove } = usePostStore();

  const handleOpenAccordion = (): void => setIsOpen((prev) => !prev);

  const activateSocialTab = (enabled: boolean, account: StoreAccount): void => {
    const socialMedia = socialMedias.get(account.socialMediaId);
    const currentPost = Object.values(posts)
      .flat()
      .find((post) => post.accountId === account.id);

    if (enabled && socialMedia?.postModes) add(account, socialMedia.postModes);
    if (!enabled && currentPost) remove(currentPost.id);
  };

  const favorite = (isFavorited: boolean, account: StoreAccount): void => {
    void favoriteAccount(account.id, isFavorited);
  };

  const renderAccordionMap = (): ReactNode =>
    props.accounts.map((account) => (
      <li key={account.id}>
        <AccountCard
          avatarURL={account.avatar}
          invalid={!account.valid}
          isEnabled={account.valid}
          onEnableChange={(enable) => activateSocialTab(enable, account)}
          onFavoriteChange={(isFavorited) => favorite(isFavorited, account)}
          username={account.userName}
        />
      </li>
    ));

  const renderAccordionContent = (): ReactNode => (
    <ul role="listitem">{renderAccordionMap()}</ul>
  );

  const hasInvalidAccount = props.accounts.some(({ valid }) => !valid);

  return (
    <Accordion
      className={scss.wrapper}
      content={renderAccordionContent()}
      header={
        <button
          aria-controls="content-accordion"
          aria-expanded={isOpen}
          className={scss.container}
          data-testid="accordion-toggle-button"
          id="btn-accordion"
          onClick={handleOpenAccordion}
        >
          <div className={scss.header}>
            <div className={scss.socialInfo}>
              <img
                alt="social media"
                className={scss.icon}
                src={iconPlaceholderForIcon}
              />
              <span>{props.title}</span>
            </div>
            {props.error && <RenderError />}
            <div className={scss.accordionInfo}>
              {hasInvalidAccount ? (
                <Icon className={scss.alertIcon} icon="alert" size={16} />
              ) : (
                <AccountQuantity accountQuantity={props.accounts.length} />
              )}

              <Icon
                aria-label={
                  isOpen ? 'Accordion is open' : 'Accordion is closed'
                }
                className={isOpen ? scss.rotateIconUp : scss.rotateIconDown}
                icon={isOpen ? 'triangle-drop-arrow' : 'triangle-left-arrow'}
                size={16}
              />
            </div>
          </div>
        </button>
      }
      isOpen={isOpen}
    />
  );
}

export default SocialAccordion;
