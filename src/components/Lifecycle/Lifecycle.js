import { useEffect, useState } from 'react';

//Ciclo de vida
// 1 - Inicialización. Se cargan y se leen las props y sus estados
// 2 - Montado. Cuando el componentes está listo, pasa a mostrarse en el DOM.
// 3 - Actualización. Cuando el cambia el valor de una prop o un estado
// 4 - Desmontado. El componente desaparece del DOM.

const Lifecycle = () => {

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    document.title = `Click no ${counter}`
  }, [counter])

  useEffect(() => {
    console.log('Use effect sin dependencias');
  }, [])

  useEffect(() => {
    console.log('Array de dependencias vacío');
  }, [])

  useEffect(() => {
    if(counter === 5) {
      alert('Llegaste a 5');
      setCounter(0);
    }
  }, [counter])

  useEffect(() => {
    if(counter2 === 3) {
      alert('Llegaste a 3');
      setCounter2(0)
    }
  }, [counter2])

  return (
    <div>
      <h2>Cuenta 1: {counter}</h2>
      <h2>Cuenta 2: {counter2}</h2>
      <button type="button" onClick={() => setCounter(counter + 1)}>Añadir +1</button>
      <button type="button" onClick={() => setCounter2(counter2 + 1)}>Añadir +1</button>
    </div>
  );
}
 
export default Lifecycle;