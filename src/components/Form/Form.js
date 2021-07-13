import { useState } from 'react';

const initialValues = {
  name: '',
  lastname: '',
  career: ''
}

const Form = () => {

  const [form, setForm] = useState(
    localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : initialValues
  );

  const handleOnChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const { name, lastname, career } = form;
 
  const handleOnSubmit = e => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Carrera:</label>
          <input
            type="text"
            name="career"
            value={career}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <hr />
      <section>
        <p>Me llamo {name} {lastname} y soy {career}</p>
      </section>
    </>
  );
}
 
export default Form;