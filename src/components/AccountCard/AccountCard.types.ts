import { ComponentPropsWithoutRef } from 'react';

type BaseAccountCardProps = ComponentPropsWithoutRef<'div'>;

export type AccountCardProps = BaseAccountCardProps & {
  avatarURL?: string;
  hasError?: boolean;
  icon?: string;
  invalid: boolean;
  isEnabled?: boolean;
  isFavorited?: boolean;
  onEnableChange?: (isEnabled: boolean) => void;
  onFavoriteChange?: (isFavorite: boolean) => void;
  username: string;
};
