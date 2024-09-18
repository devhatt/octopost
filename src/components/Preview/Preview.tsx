import { ChangeEvent, ReactNode } from 'react';

import { PreviewModeSelector } from '~pages/home/components/Tabber/PreviewModeSelector/PreviewModeSelector';

import { IconsType } from '~components/Icon/Icon.types';

import scss from './Preview.module.scss';

import { PreviewProps } from './Preview.types';

const previewModeMockList = [
  {
    icon: 'mobile' as IconsType,
    id: 'mobile',
    name: 'mobile',
  },
  {
    icon: 'tablet' as IconsType,
    id: 'tablet',
    name: 'tablet',
  },
  {
    icon: 'pc' as IconsType,
    id: 'pc',
    name: 'pc',
  },
];

const getTargetValue = (e: ChangeEvent<HTMLInputElement>): string =>
  e.target.value;

function Preview(props: PreviewProps): ReactNode {
  return (
    <div className={scss.container}>
      <div className={scss.previewContent}>
        <PreviewModeSelector
          changeDevice={getTargetValue}
          list={previewModeMockList}
        />
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default Preview;
