import { ReactNode } from 'react';

import { IconsType } from '~components/Icon/Icon.types';
import { PreviewModeSelector } from '~components/Tabber/PreviewModeSelector/PreviewModeSelector';

import scss from './Preview.module.scss';

import { PreviewProps } from './Preview.types';

const previewModeMockList = [
  {
    icon: 'mobile' as IconsType,
    id: 'mobile',
    name: 'mobile',
  },
  {
    icon: 'pc' as IconsType,
    id: 'pc',
    name: 'pc',
  },
  {
    icon: 'tablet' as IconsType,
    id: 'tablet',
    name: 'tablet',
  },
];

function Preview(props: PreviewProps): ReactNode {
  return (
    <div className={scss.container}>
      <div className={scss.previewContent}>
        <PreviewModeSelector list={previewModeMockList} />
      </div>
      <div className={scss.content}>{props.children}</div>
    </div>
  );
}

export default Preview;
