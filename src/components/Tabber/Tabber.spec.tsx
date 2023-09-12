import { render, screen, fireEvent } from '@testing-library/react';

import { networkListMock } from './networkListMock';

import TabsTabber from './components/Tabs/TabsTabber';

describe('TabsTabber Component', () => {
  it('renderiza todos os itens da lista de redes sociais', () => {
    render(
      <div>
        {networkListMock.map((socialItem) => (
          <TabsTabber
            key={socialItem.id}
            socialItem={socialItem}
            selectedTab={socialItem.id}
            onTabClick={() => {}}
          />
        ))}
      </div>
    );

    networkListMock.forEach((socialItem) => {
      const item = screen.getByText(socialItem.id);
      expect(item).toBeInTheDocument();
    });
  });

  it('muda o estado quando clicado', () => {
    networkListMock.forEach((socialItem) => {
      let selectedTab = '';

      function handleTabClick() {
        selectedTab = '';
        const tabButton = screen.getByText(socialItem.id);

        expect(tabButton).not.toHaveClass('selected');
        fireEvent.click(tabButton);
        expect(tabButton).toHaveClass('selected');
        expect(selectedTab).toBe(socialItem.id);
      }

      render(
        <div>
          <TabsTabber
            key={socialItem.id}
            socialItem={socialItem}
            selectedTab={selectedTab}
            onTabClick={handleTabClick}
          />
        </div>
      );
    });
  });
});
