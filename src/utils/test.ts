import { Locator } from '@playwright/test';

export const hasScrollbars = async (
  scrollElement: Locator,
  wrapperElement: Locator
) => {
  console.log(window);
  console.log('sim');
  console.log('aiusydgbhaisudhasui');

  const scrollStyle = await scrollElement.getAttribute('style');
  const wrapperStyle = await wrapperElement.getAttribute('style');
  console.log(scrollStyle);

  const overflowY = scrollStyle?.match(/overflow-y:\s*(.*?);/)?.[1];
  const overflowX = scrollStyle?.match(/overflow-x:\s*(.*?);/)?.[1];
  console.log(overflowY, overflowX);

  const scrollBoundingBox = await scrollElement.boundingBox();
  const wrapperBoundingBox = await wrapperElement.boundingBox();
  console.log(scrollBoundingBox);

  const scrollHeight = await scrollElement.evaluate(
    (node) => node.scrollHeight
  );
  const scrollWidth = await scrollElement.evaluate((node) => node.scrollWidth);
  console.log(scrollHeight, scrollWidth);

  const hasVerticalScrollbar =
    scrollHeight > (scrollBoundingBox?.height || 0) &&
    (overflowY === 'scroll' || overflowY === 'auto');
  const hasHorizontalScrollbar =
    scrollWidth > (scrollBoundingBox?.width || 0) &&
    (overflowX === 'scroll' || overflowX === 'auto');
  console.log(hasVerticalScrollbar, hasHorizontalScrollbar);

  return {
    horizontal: hasHorizontalScrollbar,
    vertical: hasVerticalScrollbar,
  };
};
