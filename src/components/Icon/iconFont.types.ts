export interface IIconProps {
  icon: 'at' | 'emote' | 'hashtag' | 'link' | 'pin' | 'gpt' | 'canva';
  size?: 'small' | 'large';
  color?: 'active' | 'disabled';
  className?: string;
}
