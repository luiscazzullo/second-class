import { useState } from 'react';

const SimpleForm = () => {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  return (
    <form>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
        />
      </div>
    </form>
  );
}
 
export default SimpleForm;