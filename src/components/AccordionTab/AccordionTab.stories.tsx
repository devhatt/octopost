import { useState } from 'react';

import { Story } from '@ladle/react';

import AccordionTab from './AccordionTab';

import { TAccordionTabProps } from './AccordionTab.types';

export const AccordionTabStories: Story<TAccordionTabProps> = (props) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <AccordionTab
      title="Accordion Tab"
      onChangeOpen={() => setOpen((isOpen) => !isOpen)}
      isOpen={isOpen}
      {...props}
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam autem
      soluta labore nulla, nam quisquam sed, nostrum ab vero suscipit quae
      debitis inventore velit iste iusto earum, iure aspernatur provident.
    </AccordionTab>
  );
};
