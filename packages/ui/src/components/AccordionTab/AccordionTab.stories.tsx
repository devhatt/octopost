import { useState } from 'react';

import { Story, StoryDefault } from '@ladle/react';

import { AccordionTab } from './AccordionTab';

import { AccordionTabProps } from './AccordionTab.types';

export default {
  title: 'Accordion',
} satisfies StoryDefault;

export const Component: Story<AccordionTabProps> = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AccordionTab
      isOpen={isOpen}
      onOpenChange={() => setIsOpen((isOpen) => !isOpen)}
      title="Accordion Tab"
      {...props}
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam autem
      soluta labore nulla, nam quisquam sed, nostrum ab vero suscipit quae
      debitis inventore velit iste iusto earum, iure aspernatur provident.
    </AccordionTab>
  );
};

Component.args = {
  children: 'Hello',
};
