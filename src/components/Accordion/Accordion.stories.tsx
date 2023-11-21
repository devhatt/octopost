import { Story } from '@ladle/react';

import Accordion from './Accordion';

import { TAccordionProps } from './Accordion.types';

export const AccordionStories: Story<TAccordionProps> = (props) => {
  return (
    <Accordion
      {...props}
      duration={0.3}
      isOpen
      header={<button>Click to open!</button>}
      content={
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. od quis
          molestias ab, voluptatem harum excepturi facere, necessitatibus
          officiis. Officiis excepturi aperiam error.
        </div>
      }
    />
  );
};
