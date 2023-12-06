import { nanoid } from 'nanoid';

import { IPreviewProps } from './Preview.types';

function Preview(props: IPreviewProps) {
  return props.currentTab.postModes.map(
    (postMode, index) =>
      index === props.currentPostMode && (
        <postMode.previewComponent
          text={`${postMode.name} Placeholder`}
          key={nanoid()}
        />
      )
  );
}

export default Preview;
