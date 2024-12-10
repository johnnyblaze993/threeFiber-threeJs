import { useEffect, useState } from 'react';

interface Controls {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
}

export const useKeyboardControls = (): Controls => {
  const [keys, setKeys] = useState<Controls>({
    left: false,
    right: false,
    up: false,
    down: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
        case 'a':
          setKeys((prev) => ({ ...prev, left: true }));
          break;
        case 'ArrowRight':
        case 'd':
          setKeys((prev) => ({ ...prev, right: true }));
          break;
        case 'ArrowUp':
        case 'w':
          setKeys((prev) => ({ ...prev, up: true }));
          break;
        case 'ArrowDown':
        case 's':
          setKeys((prev) => ({ ...prev, down: true }));
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
        case 'a':
          setKeys((prev) => ({ ...prev, left: false }));
          break;
        case 'ArrowRight':
        case 'd':
          setKeys((prev) => ({ ...prev, right: false }));
          break;
        case 'ArrowUp':
        case 'w':
          setKeys((prev) => ({ ...prev, up: false }));
          break;
        case 'ArrowDown':
        case 's':
          setKeys((prev) => ({ ...prev, down: false }));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return keys;
};
