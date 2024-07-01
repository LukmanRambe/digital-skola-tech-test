import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== undefined) {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
