import { useEffect } from 'react';

const useAnimation = (setAnimation, refElement, factor) => {

    useEffect(() => {
        const componentRef = refElement.current;

        const handleScroll = () => {
            const scrollValue = window.scrollY;

            if (componentRef) {
                const top = componentRef.offsetTop;
                if (scrollValue > factor * top) setAnimation(true)

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
