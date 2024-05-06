import { expect, test } from '@playwright/experimental-ct-react';

import { hasScrollbars } from '~utils/test';

import Container from './Container';

test.describe('Container', () => {
  const maxContainerHeight = 678;
  const minContainerHeight = 68;

  test('it changes its size when theres content inside it', async ({
    mount,
  }) => {
    const component = await mount(
      <Container>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Container>
    );

    const componentBoundingBox = await component.boundingBox();

    expect(componentBoundingBox?.height).toBeGreaterThan(minContainerHeight);
  });

  test('it cannot be bigger than 678', async ({ mount }) => {
    const component = await mount(
      <Container>
        <div style={{ backgroundColor: 'red', height: 1000 }} />
      </Container>
    );
    const boundingBox = await component.boundingBox();
    expect(boundingBox?.height).toBe(maxContainerHeight);
  });

  // TODO: Make the hasScrollbars function work to test this
  test.skip('shows a scrollbar', async ({ mount }) => {
    const component = await mount(
      <Container>
        <div style={{ backgroundColor: 'red', height: 1000 }} />
      </Container>
    );

    expect(
      hasScrollbars(
        component.getByTestId('scroll'),
        component.getByTestId('wrapper')
      )
    ).toBe(maxContainerHeight);
  });
});
