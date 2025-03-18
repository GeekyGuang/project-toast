import { useEffect } from 'react';

function useEscapeKey(callback) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        callback();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [callback]);
}

export default useEscapeKey;
