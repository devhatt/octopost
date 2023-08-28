import { Story } from '@ladle/react';

import { networkListMock } from './networkListMock';

import Tabber from './Tabber';

export const TabberComponent: Story = () => {
  return <Tabber socialList={networkListMock}></Tabber>;
};
