import { useState, useEffect } from 'react';

const Resize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Me llamo cada un segundo')
    }, 1000);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    //Cleanup function - Se usa para desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(timer);
    }
  }, [])

  return (
    <div>
      <h2>Tamaño de la ventana: {windowWidth}</h2>
    </div>
  );
}
 
export default Resize;