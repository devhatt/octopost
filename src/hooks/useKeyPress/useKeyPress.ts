import { useCallback, useEffect } from 'react';

function useKeyPress(
  targetKey: string,
  action: (event: KeyboardEvent) => void
): void {
  const downHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === targetKey) action(event);
    },
    [action, targetKey]
  );

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return (): void => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [downHandler]);
}

export default useKeyPress;
