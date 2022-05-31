import useStore from './useStore';
import { useState, useEffect } from 'react';

function useHydration() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsubFinishHydration = useStore.persist.onFinishHydration(() =>
      setHydrated(true)
    );

    setHydrated(useStore.persist.hasHydrated());

    return () => {
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
}

export default useHydration;
