import { useEffect, useRef } from 'react';

function useIntersect(callback: (entries: IntersectionObserverEntry[]) => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [callback]);

  return ref;
}

export default useIntersect;
