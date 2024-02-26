import { useEffect } from 'react';

function useKeyPress(
  targetKey: string,
  action: (event: KeyboardEvent) => void
): void {
  const downHandler = (event: KeyboardEvent) => {
    if (event.key === targetKey) action(event);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);
}

export default useKeyPress;
