import { ReactNode, useState } from 'react';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import '~i18n';

import MainComposerBase from './components/MainComposerBase/MainComposerBase';

function MainComposer(): ReactNode {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <AccordionTab isOpen={isOpen} onChangeOpen={setIsOpen} title="Main Content">
      <MainComposerBase />
    </AccordionTab>
  );
}

export default MainComposer;
