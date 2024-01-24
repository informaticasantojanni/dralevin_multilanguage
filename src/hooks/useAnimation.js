import { useEffect } from 'react';

const useAnimation = (setAnimation, refElement) => {
  useEffect(() => {
    const elemento = refElement.current;

    const handleScroll = () => {
      const scrollValue = window.scrollY;

      if (elemento) {
        const top = elemento.offsetTop;
        console.log("top and scroll: ", top, scrollValue);

        setAnimation(scrollValue > 0.5 * top);
      }
    };

    // Agregar el evento scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setAnimation, refElement]);
};

export default useAnimation;
