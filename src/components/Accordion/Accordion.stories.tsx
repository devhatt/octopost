import { useState } from 'react';

import { Story } from '@ladle/react';

import Accordion from './Accordion';

import { TAccordionProps } from './Accordion.types';

export const AccordionStories: Story<TAccordionProps> = (props) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <Accordion
      {...props}
      duration={0.3}
      isOpen={isOpen}
      renderHeader={() => (
        <button onClick={toggleOpen}>
          {isOpen ? 'Click to open!' : 'Click to close!'}
        </button>
      )}
      renderContent={() => (
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />
          od quis molestias ab, voluptatem harum excepturi facere,
          necessitatibus officiis.
          <br />
          Officiis excepturi aperiam error.
        </div>
      )}
    />
  );
};
