import { useState } from 'react';

import { Story } from '@ladle/react';

import Accordion from './Accordion';

import { TAccordionProps } from './Accordion.types';

export const AccordionStories: Story<TAccordionProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion
      {...props}
      content={
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. od quis
          molestias ab, voluptatem harum excepturi facere, necessitatibus
          officiis. Officiis excepturi aperiam error.
        </div>
      }
      duration={0.3}
      header={
        <button onClick={() => { setIsOpen((isOpen) => !isOpen); }} type="button">
          Click to open!
        </button>
      }
      isOpen={isOpen}
    />
  );
};
