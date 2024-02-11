import { useState } from 'react';

import { Story, StoryDefault } from '@ladle/react';

import { Accordion } from './Accordion';

import { AccordionProps } from './Accordion.types';

export default {
  title: 'Accordion',
} satisfies StoryDefault;

export const Component: Story<AccordionProps> = (props) => {
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
        <button onClick={() => setIsOpen((isOpen) => !isOpen)} type="button">
          Click to open!
        </button>
      }
      isOpen={isOpen}
    />
  );
};

Component.args = {
  children: 'Hello',
};
