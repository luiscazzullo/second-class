import { useState } from 'react';
import Form from './components/Form/Form';
import SimpleForm from './components/SimpleForm/SimpleForm'
import Lifecycle from './components/Lifecycle/Lifecycle';
import FetchCard from './components/FetchCard/FetchCard';
import Resize from './components/Resize/Resize';

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <h1>Use Effect</h1>
      <button onClick={() => setShow(!show)}>{show ? 'Ocultar' : 'Mostrar'}</button>
      {show && (
        <Resize />
      )}
      {/* <FetchCard /> */}
      {/* <Lifecycle /> */}
      {/* <Form /> */}
      {/* <SimpleForm /> */}
    </div>
  );
}

export default App;
